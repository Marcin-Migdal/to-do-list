import React, { useState } from 'react'
import styles from './TaskBox.module.css'
import completeIcon from '../../resourses/completeIcon.png'

export default function TaskBox({ task, onClick, isAddNewTaskBox }) {
  const [isExtended, setIsExtended] = useState(false);

  const handleClick = () => {
    if (task.description) {
      setTimeout(() => {
        setIsExtended(!isExtended)
      }, 50)
    }
  }

  const editTask = (e) => {
    e.stopPropagation();
    console.log('edit task')
  }

  const completeTask = () => {
    console.log('complete task')
  }

  return (
    <div className={styles.container}>
      <div
        className={isExtended ? styles.extendedTaskBox : styles.taskBox}
        onClick={onClick ? onClick : handleClick}>
        <div className={styles.mainBoxContainer}>
          <p className={isAddNewTaskBox ? styles.addNewTaskTitle : styles.title}>{task.title}</p>
          {!isAddNewTaskBox &&
            <button
              className={styles.editButton}
              onClick={editTask}>
              Edit
          </button>
          }
        </div>
        {(isExtended && task.description) &&
          <div className={styles.descriptionContainer}>
            <span className={styles.description}>
              {task.description}
            </span>
          </div>
        }
      </div>
      {!isAddNewTaskBox &&
        <button className={styles.completeButton} onClick={completeTask}>
          <img className={styles.completeIcon} src={completeIcon} />
        </button>
      }
    </div>
  )
}
