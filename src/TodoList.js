import React, { useState } from 'react';
import Todo from './Todo';
import addTodoForm from './addTodoForm';
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

  const addTodo = name => {
    let newTodos = [...todos, name];
    setTodos(newTodos);
  };
  let todolist = todos.map(todo => {
    return <Todo key={todo.id} name={todo.name} />;
  });

  return (
    <div>
      <addTodoForm addTodo={addTodo} />
      {todolist}
    </div>
  );
}

export default TodoList;
