import React from 'react'
import styles from './ListTaskCounter.module.css'

export default function ListTaskCounter({ toDoListLength }) {
  const counter = toDoListLength;
  
  return (
    <>
      {counter === 0 ?
        <p className={styles.taskCountText}>
          Your to do list is empty, <br /> add new task to change that!
        </p> :
        <p className={styles.taskCountText}>
          You have {counter} {counter > 1 ? 'tasks' : 'task'} left.
        </p>
      }
    </>
  )
}
