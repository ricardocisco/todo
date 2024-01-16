import React from 'react'
import { HiOutlinePencilAlt, HiTrash } from "react-icons/hi";


export const Todo = ({task, toCompleted, toDelete, editTodo}) => {
  return (
    <div className='todo'>
        <p onClick={() => toCompleted(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
        <div>
            <HiOutlinePencilAlt onClick={() => editTodo(task.id)} className='edit-icon'/>
            <HiTrash onClick={() => toDelete(task.id)} className='delete-icon'/>
        </div>
    </div>
  )
}
