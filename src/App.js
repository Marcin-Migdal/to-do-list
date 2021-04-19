import React, { useContext, useState } from 'react'
import AddTaskForm from './components/AddTaskFrom/AddTaskForm';
import TaskList from './components/TaskList/TaskList';
import { DataContext } from './components/DataProvider/DataProvider';
import ListTaskCounter from './components/ListTaskCounter/ListTaskCounter';
import './App.css';

function App() {
  const [toDoList] = useContext(DataContext);
  const [taskToEdit, setTaskToEdit] = useState();

  const [isFormVisible, setIsFormVisible] = useState(false);

  const closeForm = () => {
    setIsFormVisible(false)
  }

  const toogleAsAddForm = () => {
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible('add')
  }

  const toogleAsEditForm = (taskId) => {
    setTaskToEdit(taskId) 
    isFormVisible ? setIsFormVisible(false) : setIsFormVisible('edit')
  }

  return (
    <div className="container">
      <h1 className="title">Forgetto</h1>
      <p className="description">Save your tasks to <br className='mobileNewLine' /> NOT forget them!</p>
      <div className={isFormVisible ? "subContainer open" : "subContainer"}>
        <AddTaskForm isFormVisible={isFormVisible} closeForm={closeForm} taskToEdit={taskToEdit} />
        <TaskList isFormVisible={isFormVisible} toogleAsAddForm={toogleAsAddForm} toogleAsEditForm={toogleAsEditForm}/>
      </div>
      {toDoList.length >= 7 && <ListTaskCounter toDoListLength={toDoList.length} />}
    </div>
  );
}

export default App;
