import React from 'react';
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo, toggleTodo, deleteTodo,filter }) => {
  return (
    <li className='list-item'>
      <div className='check'>
        <input className='item-check'
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </div>
      {filter === 'Completed' && (
        <MdDelete className='delete-item'  onClick={() => deleteTodo(todo.id)}/>
      )}
    </li>
  );
};

export default TodoItem;
