import React, { useContext } from 'react'
import TaskBox from '../TaskBox/TaskBox'
import ListTaskCounter from '../ListTaskCounter/ListTaskCounter';
import styles from './TaskList.module.css'
import { DataContext } from '../ContextProvider/ContextProvider';
import OpenFormBox from '../OpenFormBox/OpenFormBox';

export default function TaskList({ isFormVisible }) {
  const [toDoList] = useContext(DataContext);

  return (
    <ul className={isFormVisible ? `${styles.taskList} ${styles.slideLeft}` : styles.taskList}>
      <OpenFormBox />
      {toDoList.map((task, index) => <TaskBox key={index} task={task} />)}
      {toDoList.length < 7 && <ListTaskCounter toDoList={toDoList} />}
    </ul >
  )
}
