import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(['e','e']);
  const [taskCountText, setTaskCountText] = useState();

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
  }, []);

  const TaskList = () => {
    const taskList = []

    toDoList.map((task, index) => {
      taskList.push(
        <div key={index} className="addTaskBox">
          {task}
        </div>
      )
    })

    return taskList
  }

  return (
    <div className="container">
      <p className="title">Forgetto</p>
      <p className="description">
        Just save your tasks to <br className='mobileNewLine' /> NOT forget them!
      </p>
      <div className="taskContainer">
        <div className="addTaskBox">+</div>
        <TaskList />
      </div>
      {taskCountText}
    </div>
  );
}

export default App;
