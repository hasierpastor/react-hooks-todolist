import React, { useState } from 'react';

//destructured addTodo from props
function AddTodoForm({ addTodo }) {
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
      <label htmlFor="name">Name</label>
      <input name="name" value={value} onChange={handleChange} />
      <button>Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
