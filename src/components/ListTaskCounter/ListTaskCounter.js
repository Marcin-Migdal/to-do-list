import React, { useEffect, useState } from 'react'
import styles from './ListTaskCounter.module.css'

export default function ListTaskCounter({ toDoList }) {
  const [counter, setCounter] = useState();

  useEffect(() => {
    const filterToDoList = () => {
      const tempCounter = toDoList.filter((task => {
        return !task.completed
      }));
      setCounter(tempCounter.length)
    }

    filterToDoList()
  }, [toDoList]);

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
