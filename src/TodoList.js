import React, { useState } from 'react';
import Todo from './Todo';
import AddTodoForm from './AddTodoForm';
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
    let newTodos = [...todos, { id: uuidv4(), name }];
    setTodos(newTodos);
  };

  const removeTodo = name => {
    let filteredTodos = todos.filter(todo => {
      return todo.name !== name;
    });
    setTodos(filteredTodos);
  };

  let todolist = todos.map(todo => {
    return <Todo key={todo.id} name={todo.name} removeTodo={removeTodo} />;
  });

  return (
    <div>
      <AddTodoForm addTodo={addTodo} />
      {todolist}
    </div>
  );
}

export default TodoList;
