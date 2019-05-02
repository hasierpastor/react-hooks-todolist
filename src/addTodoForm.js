import React, { useState } from 'react';

//destructured addTodo from props
function addTodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(value);
    setValue('');
  };
  const handleChange = evt => {
    setValue(evt.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" />
      <input name="name" type="text" value={value} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default addTodoForm;
