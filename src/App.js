import React, { useEffect, useState } from 'react'
import TaskBox from './components/TaskBox/TaskBox';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState(
    [
      {
        title: 'make dinner make dinner make dinner make dinner ',
        description: 'Make spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family andke spagetti for whole family and friends'
      },
      {
        title: 'make dinner',
        description: 'Make spagetti for whole family'
      },
      {
        title: 'make dinner',
      },
      {
        title: 'make dinner',
        description: 'Make spagetti for whole family'
      },
      {
        title: 'make dinner',
      }
    ]);
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
  }, [toDoList]);

  const addNewTask = () => {
    console.log('add task')
  }

  return (
    <div className="container">
      <p className="title">Forgetto</p>
      <p className="description">
        Save your tasks to <br className='mobileNewLine' /> NOT forget them!
      </p>
      <div className="taskContainer">
        <TaskBox
          task={{ title: '+' }}
          onClick={addNewTask}
          isAddNewTaskBox={true} />
        {
          toDoList.map((task, index) => { return <TaskBox key={index} task={task} /> })
        }
      </div>
      {taskCountText}
    </div>
  );
}

export default App;
