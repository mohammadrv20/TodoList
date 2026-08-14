import { useState } from 'react'
import './App.css'

export default function App(){

  const [tasks , setTasks] = useState(["Ali" , "Javad" , "Mamad"])

  return(
    <>
    <h1>To Do List App</h1>
    <input type="text" placeholder="Type the Task here ..." />
    <button>Add</button>
    <ul >
      {tasks.map((task , index) => <li key={index}>{task}</li>)}
    </ul>
    </>
  )
}