import React from 'react'


// {
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }

function Todo({todo}) {
  return (
    <li>
        <span>{todo.title}</span>
        <input type="checkbox" checked={todo.completed} readOnly/>
    </li>
  );
}

export default Todo