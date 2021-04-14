import React, { useRef } from 'react'
import styles from './AddTaskForm.module.css'

export default function AddTaskForm({ isFormVisible, addNewTask }) {
  const taskNameRef = useRef();
  const taskDescriptionRef = useRef();

  const handleAddTask = () => {
    if (taskNameRef.current.value) {
      const addedTask = {
        taskName: taskNameRef.current.value,
        taskDescription: taskDescriptionRef.current.value
      }

      addNewTask(addedTask)

      taskNameRef.current.value = ''
      taskDescriptionRef.current.value = ''
    }
  }

  return (
    <div className={isFormVisible ? `${styles.formContainer} ${styles.open}` : styles.formContainer}>
      <p className={styles.title}>Add Task</p>
      <input
        ref={el => taskNameRef.current = el}
        className={styles.taskNameInput}
        type="text"
        placeholder="Task name" />
      <textarea
        ref={el => taskDescriptionRef.current = el}
        className={styles.descriptionInput}
        placeholder="Description (optional)" />
      <button className={styles.button} onClick={handleAddTask} >
        Add task
      </button>
    </div >
  )
}
