import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext()
export const SortContext = createContext()
export const FormContext = createContext()
export const EditTaskContext = createContext()

export const ContextProvider = (props) => {
  const [toDoList, setToDoList] = useState([]);
  const [sortType, setSortType] = useState('all');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState();

  useEffect(() => {
    const toDoListStore = JSON.parse(localStorage.getItem('toDoListStore'));
    if (toDoListStore) {
      toDoListStore.forEach(task => {
        task.selected = false
      });
      setToDoList(toDoListStore)
    }
  }, [sortType]);

  useEffect(() => {
    localStorage.setItem('toDoListStore', JSON.stringify(toDoList))
  }, [toDoList]);

  return (
    <DataContext.Provider value={[toDoList, setToDoList]}>
      <SortContext.Provider value={[sortType, setSortType]}>
        <FormContext.Provider value={[isFormVisible, setIsFormVisible]}>
          <EditTaskContext.Provider value={{ taskToEdit, setTaskToEdit }}>
            {props.children}
          </EditTaskContext.Provider>
        </FormContext.Provider>
      </SortContext.Provider>
    </DataContext.Provider >
  )
}
