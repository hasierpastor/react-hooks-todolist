import React from 'react';

function Todo({ name, removeTodo }) {
  //call removeTodo passed down from parent
  const remove = () => {
    removeTodo(name);
  };
  return (
    <div>
      {name}
      <button onClick={remove}>Remove Todo</button>
    </div>
  );
}

export default Todo;
