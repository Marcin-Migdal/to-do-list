import React, { useState, useContext, useEffect } from 'react'
import styles from './AddTaskForm.module.css'
import { DataContext, EditTaskContext, FormContext } from '../ContextProvider/ContextProvider';
import { nanoid } from "nanoid";
import backArrow from '../../resourses/backArrow.png'

export default function AddTaskForm() {
  const [toDoList, setToDoList] = useContext(DataContext);
  const [isFormVisible, setIsFormVisible] = useContext(FormContext);
  const { taskToEdit } = useContext(EditTaskContext);

  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [formText, setFormText] = useState('Add task');

  useEffect(() => {
    const setUpForm = () => {
      if (isFormVisible === 'add') {
        setFormText('Add task')
      } else if (isFormVisible === 'edit') {
        setFormText('Edit task')
        setTaskName(taskToEdit.title)
        setTaskDescription(taskToEdit.description)
      }
    }

    const cleanUpForm = () => {
      setTimeout(() => {
        setTaskName('')
        setTaskDescription('')
      }, 400);
    }

    setUpForm()
    !isFormVisible && cleanUpForm()
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
      selected: false,
    }

    setToDoList([...toDoList, addedTask])
    closeForm()
  }

  const editTask = e => {
    e.preventDefault();
    let newToDoList = [...toDoList];

    newToDoList.forEach(toDoTask => {
      if (toDoTask.id === taskToEdit.id) {
        toDoTask.title = taskName
        toDoTask.description = taskDescription
      }
    })

    setToDoList(newToDoList)
    closeForm()
  }

  const closeForm = () => {
    setIsFormVisible(false)
  }

  return (
    <form autoComplete="off" onSubmit={(e) => {
      isFormVisible === 'add' ? addTask(e) : editTask(e)
    }}
      className={isFormVisible ? `${styles.formContainer} ${styles.open}` : styles.formContainer}>
      <button type="button" onClick={() => closeForm()} className={styles.iconContainer}>
        <img src={backArrow} className={styles.backArrowIcon} alt="close" />
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
