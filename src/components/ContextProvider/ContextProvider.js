import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()
export const FormContext = createContext()
export const EditTaskContext = createContext()

export const ContextProvider = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState();

  useEffect(() => {
    const toDoListStore = JSON.parse(localStorage.getItem('toDoListStore'));
    toDoListStore && setToDoList(toDoListStore)
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoListStore', JSON.stringify(toDoList))
  }, [toDoList]);

  return (
    <DataContext.Provider value={[toDoList, setToDoList]}>
      <FormContext.Provider value={[isFormVisible, setIsFormVisible]}>
        <EditTaskContext.Provider value={[taskToEdit, setTaskToEdit]}>
          {props.children}
        </EditTaskContext.Provider>
      </FormContext.Provider>
    </DataContext.Provider >
  )
}
