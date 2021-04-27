import React, { useContext, useState } from 'react'
import { DataContext, SortContext } from '../ContextProvider/ContextProvider';
import styles from './Footer.module.css'
import BigButton from '../BigButton/BigButton';

export default function Footer() {
  const [toDoList, setToDoList] = useContext(DataContext);
  const [sortType, setSortType] = useContext(SortContext);
  const [checkAll, setCheckAll] = useState(false);

  const handleCheckAll = () => {
    const newToDoList = [...toDoList]

    newToDoList.forEach(task => {
      if (sortType === 'all') {
        task.selected = !checkAll
      } else if (sortType === 'completed' && task.completed === true) {
        task.selected = !checkAll
      } else if (sortType === 'notCompleted' && task.completed === false) {
        task.selected = !checkAll
      }
    })

    setToDoList(newToDoList)
    setCheckAll(!checkAll)
  }

  const deleteTasks = () => {
    let isTaskSelected = false;
    const newToDoList = toDoList.filter(task => {
      if (!task.selected) {
        return task
      } else {
        isTaskSelected = true
      }
    })

    isTaskSelected && setToDoList(newToDoList)
    checkAll && setCheckAll(false)
  }

  const handleSortChange = sort => {
    setSortType(sort)
    checkAll && setCheckAll(false)
  }

  return (
    <div className={styles.footerContainer}>
      <label htmlFor="checkAll">
        <input
          type="checkbox"
          id="checkAll"
          checked={checkAll}
          className={styles.checkBox}
          onChange={handleCheckAll} />
        ALL
      </label>
      <div className={styles.rightFooterContainer}>
        <select className={styles.dropDownMenu} onChange={e => handleSortChange(e.target.value)}>
          <option className={styles.dropDownMenuItem} value="all">All tasks</option>
          <option className={styles.dropDownMenuItem} value="completed">Completed</option>
          <option className={styles.dropDownMenuItem} value="notCompleted">Not completed</option>
        </select>
        <BigButton
          onClick={deleteTasks}
          isFormVisible={false}
          isComplete={false}
          type='delete' />
      </div>
    </div>
  )
}
