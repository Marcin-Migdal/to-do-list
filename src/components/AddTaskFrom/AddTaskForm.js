import React, { useState, useContext, useEffect } from 'react'
import styles from './AddTaskForm.module.css'
import { DataContext } from '../DataProvider/DataProvider';
import { nanoid } from "nanoid";
import backArrow from '../../resourses/backArrow.png'

export default function AddTaskForm({ isFormVisible, closeForm, taskToEdit }) {
  const [toDoList, setToDoList] = useContext(DataContext);

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [formText, setFormText] = useState('Add task');

  useEffect(() => {
    const setUpForm = () => {
      setTaskName('')
      setTaskDescription('')
      if (isFormVisible === 'add') {
        setFormText('Add task')
      } else if (isFormVisible === 'edit') {
        setFormText('Edit task')
        setTaskName(taskToEdit.title)
        setTaskDescription(taskToEdit.description)
      }
    }

    setUpForm()
  }, [isFormVisible, taskToEdit]);

  const addTask = (e) => {
    e.preventDefault();
    if (!taskName.trim()) {
      return
    }
    const addedTask = {
      id: nanoid(),
      title: taskName.trim(),
      description: taskDescription.trim(),
      completed: false,
    }

    setToDoList([...toDoList, addedTask])

    closeForm()
  }

  const editTask = (e) => {
    e.preventDefault();
    let newToDoList = [];

    toDoList.map(toDoTask => {
      if (toDoTask.id === taskToEdit.id) {
        taskToEdit.title = taskName
        taskToEdit.description = taskDescription
        newToDoList.push(taskToEdit)
      } else {
        newToDoList.push(toDoTask)
      }
    })

    setToDoList(newToDoList)

    closeForm()
  }

  return (
    <form autoComplete="off" onSubmit={(e) => {
      isFormVisible === 'add' ? addTask(e) : editTask(e)
    }}
      className={isFormVisible ? `${styles.formContainer} ${styles.open}` : styles.formContainer}>
      <button type="button" onClick={() => closeForm()} className={styles.iconContainer}>
        <img src={backArrow} className={styles.backArrowIcon} />
      </button>
      <p className={styles.title}>{formText}</p>
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
      <button disabled={!taskName} type="submit" className={styles.button} >
        {formText}
      </button>
    </form >
  )
}
