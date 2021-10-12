import React from 'react'
import Todo from './Todo'

// [{
// 	"userId": 1,
// 	"id": 1,
// 	"title": "delectus aut autem",
// 	"completed": false
// }]

function TodoList({todos}) {
  return (
    todos.map((todo, index) => (
        <Todo todo={todo} key={index}/>
    ))
  );
}

export default TodoList