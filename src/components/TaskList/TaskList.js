import React, { useContext } from 'react'
import TaskBox from '../TaskBox/TaskBox'
import ListTaskCounter from '../ListTaskCounter/ListTaskCounter';
import styles from './TaskList.module.css'
import { DataContext } from '../DataProvider/DataProvider';

export default function TaskList({ toogleForm, isFormVisible }) {
  const [toDoList] = useContext(DataContext);

  const ToggleFormBox = () => {
    return (
      <TaskBox
        task={{ title: '+' }}
        onClick={toogleForm}
        isAddNewTaskBox={true} />
    )
  }

  return (
    <ul className={isFormVisible ? `${styles.taskList} ${styles.slideLeft}` : styles.taskList}>
      <ToggleFormBox />
      {
        toDoList.map((task, index) => { return <TaskBox key={index} task={task} /> })
      }
      {toDoList.length < 7 && <ListTaskCounter toDoListLength={toDoList.length} />}
    </ul >
  )
}
