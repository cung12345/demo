import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='input-form'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add details"
      />
      <button type="submit" className='input-add'>Add</button>
    </form>
  );
};

export default TodoForm;
