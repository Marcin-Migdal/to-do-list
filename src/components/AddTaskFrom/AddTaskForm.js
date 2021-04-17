import React, { useState, useContext } from 'react'
import styles from './AddTaskForm.module.css'
import { DataContext } from '../DataProvider/DataProvider';

export default function AddTaskForm({ isFormVisible, closeForm }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [toDoList, setToDoList] = useContext(DataContext);

  const addTask = (e) => {
    e.preventDefault();
    if (taskName) {
      const addedTask = {
        title: taskName,
        description: taskDescription,
        completed: false,
      }

      setToDoList([...toDoList, addedTask])

      setTaskName('')
      setTaskDescription('')
      closeForm()
    }
  }

  return (
    <form autoComplete="off" onSubmit={addTask}
      className={isFormVisible ? `${styles.formContainer} ${styles.open}` : styles.formContainer}>
      <p className={styles.title}>Add Task</p>
      <input
        className={styles.taskNameInput}
        type="text"
        placeholder="Task name"
        value={taskName}
        onChange={e => setTaskName(e.target.value)} />
      <textarea
        className={styles.descriptionInput}
        placeholder="Description (optional)"
        value={taskDescription}
        onChange={e => setTaskDescription(e.target.value)} />
      <button type="submit" className={styles.button} >
        Add task
      </button>
    </form >
  )
}
