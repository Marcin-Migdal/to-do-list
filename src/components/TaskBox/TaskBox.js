import React, { useContext, useState } from 'react'
import styles from './TaskBox.module.css'
import completeIcon from '../../resourses/completeIcon.png'
import { DataContext, EditTaskContext, FormContext } from '../ContextProvider/ContextProvider';

export default function TaskBox({ task }) {
  const [toDoList, setToDoList] = useContext(DataContext);
  const [isFormVisible, setIsFormVisible] = useContext(FormContext);
  const [taskToEdit, setTaskToEdit] = useContext(EditTaskContext);

  const [isExtended, setIsExtended] = useState(false);

  const toogleAsEditForm = (task) => {
    setTaskToEdit(task)
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible('edit')
  }

  const handleClick = () => {
    if (task.description) {
      setTimeout(() => {
        setIsExtended(!isExtended)
      }, 50)
    }
  }

  const editTask = (e, task) => {
    e.stopPropagation();
    toogleAsEditForm(task)
  }

  const completeTask = () => {
    const newToDoList = [];

    toDoList.map(toDoTask => {
      if (toDoTask.id === task.id) {
        task.completed = true;
        newToDoList.push(task)
      } else {
        newToDoList.push(toDoTask)
      }
    })

    setToDoList(newToDoList)
  }

  return (
    <div className={task.completed ? `${styles.container} ${styles.completed}` : styles.container}>
      <div
        className={isExtended ? styles.extendedTaskBox : styles.taskBox}
        onClick={handleClick}>
        <div className={styles.mainBoxContainer}>
          <p className={styles.title}>{task.title}</p>
          {!task.completed &&
            <button
              disabled={isFormVisible === 'add'}
              className={styles.editButton}
              onClick={(e) => { editTask(e, task) }}>
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
      <button
        onClick={completeTask}
        className={(task.completed || isFormVisible === 'edit') ? styles.completeDisabledButton : styles.completeButton}
        disabled={task.completed || isFormVisible === 'edit'}>
        <img className={styles.completeIcon} src={completeIcon} />
      </button>
    </div>
  )
}
