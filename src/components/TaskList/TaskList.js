import React, { useContext, useEffect, useState } from 'react'
import TaskBox from '../TaskBox/TaskBox'
import Footer from '../Footer/Footer';
import styles from './TaskList.module.css'
import { DataContext, SortContext } from '../ContextProvider/ContextProvider';

export default function TaskList({ isFormVisible }) {
  const [toDoList, setToDoList] = useContext(DataContext);
  const [sortType] = useContext(SortContext);
  const [localToDoList, setLocalToDoList] = useState();

  useEffect(() => {
    const setNewToDoList = () => {
      let newToDoList = [];
      switch (sortType) {
        case 'all':
          newToDoList = toDoList
          break;
        case 'completed':
          newToDoList = sortToDoList(true);
          break;
        case 'notCompleted':
          newToDoList = sortToDoList(false);
          break;
      }
      setLocalToDoList(newToDoList)
    }

    const sortToDoList = (condition) => {
      const sortedToDoList = toDoList.filter(task => {
        if (task.completed === condition) {
          return task
        }
      })

      return sortedToDoList;
    }

    setNewToDoList()
  }, [toDoList]);

  const completeTask = taskId => {
    const newToDoList = [...toDoList];

    newToDoList.forEach(toDoTask => {
      if (toDoTask.id === taskId) {
        toDoTask.completed = true;
      }
    })

    setToDoList(newToDoList)
  }

  const selectTask = taskId => {
    const newToDoList = [...toDoList];

    newToDoList.forEach(task => {
      if (taskId === task.id) {
        task.selected = !task.selected;
      }
    })

    setToDoList(newToDoList)
  }

  const Notyfication = () => {
    return (
      <>
        {sortType === 'completed' ?
          <p className={styles.taskNotyficationText}>You haven't completed any tasks yet</p> :
          <p className={styles.taskNotyficationText}>Your to do list is empty</p>
        }
      </>
    )
  }

  return (
    <>
      {localToDoList &&
        <div className={isFormVisible ? `${styles.taskListContainer} ${styles.slideLeft}` : styles.taskListContainer}>
          {localToDoList.length < 1 ?
            <Notyfication /> :
            <ul className={styles.taskList}>
              {localToDoList.map((task, index) => {
                return (
                  <TaskBox
                    key={index}
                    task={task}
                    completeTask={completeTask}
                    selectTask={selectTask} />
                )
              })}
            </ul >
          }
          <hr className={styles.myHr} />
          <Footer />
        </div>
      }
    </>
  )
}
