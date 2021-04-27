import React, { useContext } from 'react'
import AddTaskForm from './components/AddTaskFrom/AddTaskForm';
import TaskList from './components/TaskList/TaskList';
import { FormContext } from './components/ContextProvider/ContextProvider';
import './App.css';
import OpenFormBox from './components/OpenFormBox/OpenFormBox';

function App() {
  const [isFormVisible] = useContext(FormContext);

  return (
    <div className="container">
      <h1 className="title">to do list</h1>
      <p className="description">Save your tasks to <br className='mobileNewLine' /> NOT forget them!</p>
      <OpenFormBox />
      <div className={isFormVisible ? "subContainer open" : "subContainer"}>
        <AddTaskForm />
        <TaskList isFormVisible={isFormVisible} />
      </div>
    </div>
  );
}

export default App;
