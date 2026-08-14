import { useState } from 'react'
import './App.css'

export default function App(){
  return(
    <>
    <h1>To Do List App</h1>
    <input type="text" placeholder="Type the Task here ..." />
    <button>Add</button>
    <ul>
      <li>Test</li>
      <li>Test</li>
      <li>Test</li>
    </ul>
    </>
  )
}