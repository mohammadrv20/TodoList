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

  function handleUpp(index){

    const updateArr = [...tasks]
    const temp = updateArr[index]
    updateArr[index] = updateArr[index - 1]
    updateArr[index -1] = temp

    setTasks(updateArr)
  }

    console.log(tasks)
  return(
    <>
    <h1>To Do List App</h1>
    <input type="text" placeholder="Type the Task here ..." onChange={handleChange} value={task} />
    <button onClick={handleClick}>Add</button>
    <ul >
      {tasks.map((task , index) => <li key={index}>{task}
         <button onClick={() => handleRemove(index)}
          className='text-red-600'>remove</button>
          <button onClick={() => handleUpp(index)} className='text-blue-600'>Up</button>
          <button className='text-blue-600'>Down</button>
          </li>)}
    </ul>
    </>
  )
}