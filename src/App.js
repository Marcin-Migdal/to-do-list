import React, { useContext } from 'react'
import AddTaskForm from './components/AddTaskFrom/AddTaskForm';
import TaskList from './components/TaskList/TaskList';
import { DataContext, FormContext } from './components/ContextProvider/ContextProvider';
import ListTaskCounter from './components/ListTaskCounter/ListTaskCounter';
import './App.css';

function App() {
  const [toDoList] = useContext(DataContext);
  const [isFormVisible] = useContext(FormContext);

  return (
    <div className="container">
      <h1 className="title">Forgetto</h1>
      <p className="description">Save your tasks to <br className='mobileNewLine' /> NOT forget them!</p>
      <div className={isFormVisible ? "subContainer open" : "subContainer"}>
        <AddTaskForm />
        <TaskList isFormVisible={isFormVisible} />
      </div>
      {toDoList.length >= 7 && <ListTaskCounter toDoList={toDoList} />}
    </div>
  );
}

export default App;
