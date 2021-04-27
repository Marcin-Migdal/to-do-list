import React, { useContext, useState } from 'react'
import styles from './TaskBox.module.css'
import { EditTaskContext, FormContext } from '../ContextProvider/ContextProvider';
import BigButton from '../BigButton/BigButton';

export default function TaskBox({ task, completeTask, selectTask }) {
  const [isFormVisible, setIsFormVisible] = useContext(FormContext);
  const { setTaskToEdit } = useContext(EditTaskContext);

  const [isExtended, setIsExtended] = useState(false);

  const toogleAsEditForm = e => {
    e.stopPropagation();
    setTaskToEdit(task)
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible('edit')
  }

  const toggleExtendBox = () => {
    if (task.description) {
      setTimeout(() => {
        setIsExtended(!isExtended)
      }, 50)
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={isExtended ? styles.extendedTaskBox : styles.taskBox}
        onClick={toggleExtendBox}>
        <div className={styles.topBoxContainer}>
          <div className={styles.leftTopBoxContainer}>
            <input
              type="checkbox"
              className={styles.checkBox}
              checked={task.selected}
              onChange={() => selectTask(task.id)}
              onClick={e => e.stopPropagation()} />
            <p className={styles.title}>{task.title}</p>
          </div>
          {!task.completed &&
            <button
              disabled={isFormVisible === 'add'}
              className={styles.editButton}
              onClick={toogleAsEditForm}>
              Edit
            </button>
          }
        </div>
        <div className={styles.bottomBoxContainer}>
          <span className={styles.description}>
            {task.description}
          </span>
        </div>
      </div>
      <BigButton
        onClick={() => completeTask(task.id)}
        isFormVisible={isFormVisible}
        isComplete={task.completed} />
    </div>
  )
}
