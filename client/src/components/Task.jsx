import React from 'react'
import './task.css'
import { useNavigate } from 'react-router'
export default function Task(props) {
const navigate= useNavigate()
const handleUpdate=(text)=>{
navigate('/addnew',{
  state:text
})
}
  return (
    <div className='card'>
      <h4>{props.task.text}</h4>
      <button className='btn btn-primary' onClick={()=>handleUpdate(props.task)}>Update</button>
      <button className='btn btn-secondary' onClick={()=>props.handleDelete(props.task._id)}>Delete</button>
    </div>
  )
}
