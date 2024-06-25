import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from 'C:\\Users\\punee\\OneDrive\\Desktop\\cs\\javascript\\react\\todo_app\\frontend\\frontend_todo_app\\components\\CreateTodo.jsx'
import { Todos } from 'C:\\Users\\punee\\OneDrive\\Desktop\\cs\\javascript\\react\\todo_app\\frontend\\frontend_todo_app\\components\\Todos.jsx'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

   fetch("http://localhost:3000/todos")
     .then(async function(res) {
       const json = await res.json();
       setTodos(json.todos);
     })

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App