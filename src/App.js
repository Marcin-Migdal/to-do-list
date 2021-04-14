import React, { useEffect, useState } from 'react'
import TaskBox from './components/TaskBox/TaskBox';
import './App.css';
import AddTaskForm from './components/AddTaskFrom/AddTaskForm';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskCountText, setTaskCountText] = useState();

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const checkToDolist = () => {
      if (toDoList.length > 0) {
        setTaskCountText(
          <p className="taskCountText">
            You have {toDoList.length} {toDoList.length > 1 ? 'tasks' : 'task'} left.
          </p>
        )
        return;
      }
      setTaskCountText(
        <p className="taskCountText">
          Your to do list is empty,
         <br />
          add new task to change that!
      </p>
      )
    }

    checkToDolist()
  }, [toDoList]);

  const addNewTask = (addedTask) => {
    const task = {
      title: addedTask.taskName,
      description: addedTask.taskDescription
    }

    setToDoList([...toDoList, task])
    toogleForm()
  }

  const toogleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  return (
    <div className="container">
      <p className="title">Forgetto</p>
      <p className="description">
        Save your tasks to <br className='mobileNewLine' /> NOT forget them!
      </p>
      <div className={isFormVisible ? "subContainer open" : "subContainer"}>
        <AddTaskForm isFormVisible={isFormVisible} addNewTask={addNewTask} />
        <div className={isFormVisible ? "taskList slideLeft" : "taskList"}>
          <TaskBox
            task={{ title: '+' }}
            onClick={toogleForm}
            isAddNewTaskBox={true} />
          {
            toDoList.map((task, index) => { return <TaskBox key={index} task={task} /> })
          }
          {toDoList.length < 7 && taskCountText}
        </div>
      </div>
      {toDoList.length >= 7 && taskCountText}
    </div>
  );
}

export default App;
