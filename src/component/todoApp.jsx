import React, { useState, useEffect } from 'react';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from "react-icons/md";

const TodoApp = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);
  const [filter, setFilter] = useState('All');

  // Tải dữ liệu từ localStorage khi ứng dụng khởi động
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
    console.log(1)
  }, []);

  // Lưu dữ liệu vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>#todo</h1>

      <div className='menu'>
        <div className={`menu-item ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</div>
        <div className={`menu-item ${filter === 'Active' ? 'active' : ''}`} onClick={() => setFilter('Active')}>Active</div>
        <div className={`menu-item ${filter === 'Completed' ? 'active' : ''}`} onClick={() => setFilter('Completed')}>Completed</div>
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter={filter}
      />
      <div className='detete-ok'>
        {filter === 'Completed' && (
          <div className='delete-all' onClick={clearCompleted}> <MdDelete />Clear Completed</div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
