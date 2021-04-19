import React, { useContext } from 'react'
import TaskBox from '../TaskBox/TaskBox'
import ListTaskCounter from '../ListTaskCounter/ListTaskCounter';
import styles from './TaskList.module.css'
import { DataContext } from '../DataProvider/DataProvider';
import OpenFormBox from '../OpenFormBox/OpenFormBox';

export default function TaskList({ isFormVisible, toogleAsAddForm, toogleAsEditForm }) {
  const [toDoList] = useContext(DataContext);

  return (
    <ul className={isFormVisible ? `${styles.taskList} ${styles.slideLeft}` : styles.taskList}>
      <OpenFormBox
        toogleAsAddForm={toogleAsAddForm}
        isFormVisible={isFormVisible} />
      {
        toDoList.map((task, index) => {
          return (
            <TaskBox key={index}
              task={task}
              toogleAsEditForm={toogleAsEditForm}
              isFormVisible={isFormVisible} />
          )
        })
      }
      {toDoList.length < 7 && <ListTaskCounter toDoListLength={toDoList.length} />}
    </ul >
  )
}
