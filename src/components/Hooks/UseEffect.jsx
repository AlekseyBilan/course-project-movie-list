import React, {useState, useEffect} from 'react'
import TodoList from '../TodoList/Todolist'

function UseEffect() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])

//   useEffect(() => {
//     console.log('render')
//   })
const clickHandler = (e) => {
    console.log('e = ', e.path[0]);
}

  useEffect(() => {
    console.log('useEffect type is = ', type);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => console.log(json))

    return () => {
      console.log('clean type');
    }
  }, [type])

  useEffect(() => {
    console.log('ComponentDidMount')

    window.addEventListener('click', clickHandler);

    return () => {
      window.removeEventListener('click', clickHandler);
    }
  }, [])

  useEffect(() => {
    console.log('useEffect like ComponentDidMount lifecicle method');
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => setData(json))
  }, [])

  return (
    <>
        <h1>UseEffect example</h1>
        <h1>Ресурс: {type}</h1>

        <button onClick={() => setType("users")}>Users</button>
        <button onClick={() => setType("todos")}>Todos</button>
        <button onClick={() => setType("posts")}>Posts</button>

        <TodoList todos={data}/>
    </>
  );
}

export default UseEffect