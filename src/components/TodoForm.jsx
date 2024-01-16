import React, { useState } from 'react';
import "../index.css";

export const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input 
        placeholder='Digite sua tarefa'
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        />
        <button>Enviar Tarefa</button>
    </form>
  )
}
