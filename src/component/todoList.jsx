import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo,filter }) => {
  return (
    <ul className='list'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          filter={filter}
        />
      ))}
    </ul>
  );
};

export default TodoList;
