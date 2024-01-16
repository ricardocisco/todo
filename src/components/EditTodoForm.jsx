import React, { useState } from 'react';
import "../index.css";

export const EditTodoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id)
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input 
        placeholder='Editar a tarefa'
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        />
        <button>Editar a Tarefa</button>
    </form>
  )
}