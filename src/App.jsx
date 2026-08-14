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
    setTask("")
  }

  function handleRemove(index){
    setTasks(tasks.filter((_ , indexToRemove ) => index !== indexToRemove))
  }

  return(
    <>
    <h1>To Do List App</h1>
    <input type="text" placeholder="Type the Task here ..." onChange={handleChange} value={task} />
    <button onClick={handleClick}>Add</button>
    <ul >
      {tasks.map((task , index) => <li key={index}>{task} <button onClick={() => handleRemove(index)} className='text-red-600'>remove</button></li>)}
    </ul>
    </>
  )
}