import React, { useState } from 'react';
import Todo from './Todo';
const uuidv4 = require('uuid/v4');

function TodoList() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), name: 'Sleep' },
    {
      id: uuidv4(),
      name: 'Eat'
    },
    { id: uuidv4(), name: 'Study' }
  ]);

  let todolist = todos.map(todo => {
    return <Todo key={todo.id} name={todo.name} />;
  });

  return <div>{todolist}</div>;
}

export default TodoList;
