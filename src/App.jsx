import { useState } from 'react'
import './App.css'

export default function App(){

  const [tasks , setTasks] = useState([])
  const [task , setTask] = useState("")
  
  function handleChange(event){
    setTask(event.target.value)
  }
  
  function handleClick(){
    setTasks([...tasks , task])
  }

  return(
    <>
    <h1>To Do List App</h1>
    <input type="text" placeholder="Type the Task here ..." onChange={handleChange} value={task} />
    <button onClick={handleClick}>Add</button>
    <ul >
      {tasks.map((task , index) => <li key={index}>{task}</li>)}
    </ul>
    </>
  )
}