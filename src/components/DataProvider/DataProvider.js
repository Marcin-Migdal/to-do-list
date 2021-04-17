import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const toDoListStore = JSON.parse(localStorage.getItem('toDoListStore'));
    toDoListStore && setToDoList(toDoListStore)
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoListStore', JSON.stringify(toDoList))
  }, [toDoList]);

  return (
    <DataContext.Provider value={[toDoList, setToDoList]}>
      {props.children}
    </DataContext.Provider >
  )
}
