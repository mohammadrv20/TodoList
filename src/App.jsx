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

    if(index === 0 ) return;

    const updateArr = [...tasks]
    const temp = updateArr[index]
    updateArr[index] = updateArr[index - 1]
    updateArr[index -1] = temp

    setTasks(updateArr)
  }

  function handleDown(index){

    if(index ===tasks.length - 1) return;

    const updateArr = [...tasks]
    const temp = updateArr[index]
    updateArr[index] = updateArr[index + 1]
    updateArr[index + 1] = temp

    setTasks(updateArr)
  }

    console.log(tasks)
  return(
    <>
    <div className='flex justify-center items-center min-h-screen flex-col'>
      <div className='bg-white p-6 rounded-2xl shadow-xl w-full max-w-xl border border-slate-100 '>
    <h1 className='text-2xl font-mono mb-8 font-bold text-center text-slate-800'>To Do List App</h1>
    <div className='flex gap-2 mb-6'>
    <input
     className='flex-1 border-2 border-cyan-500 p-2.5 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all text-slate-700'
     type="text"
     placeholder="Type the Task here ..."
     onChange={handleChange}
     value={task} />
    <button
     className='font-mono font-semibold border-2 border-emerald-500 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-90 text-white rounded-lg shadow-md transition-all cursor-pointer' 
     onClick={handleClick}>Add</button>
     </div>
    <div className='mt-10'>
    <ul className='list-decimal space-y-3'>
      {tasks.map((task , index) => <li className='font-mono ml-5 text-slate-800' key={index}>{task}
         <button  onClick={() => handleRemove(index)}
          className='bg-red-500 border-2 hover:border-red-300 transition-all hover:bg-red-600 cursor-pointer text-white px-5 py-1 rounded-lg  m-1 ml-4'>remove</button>
          <button onClick={() => handleUpp(index)} className='bg-blue-500 text-white px-5 py-1 rounded-lg m-1 hover:bg-blue-600 transition-all cursor-pointer'>Up</button>
          <button onClick={() => handleDown(index)} className='bg-blue-500 text-white px-5 py-1 rounded-lg m-1 hover:bg-blue-600 transition-all cursor-pointer'>Down</button>
          </li>)}
    </ul>
    </div>
    </div>
    </div>
    </>
  )
}