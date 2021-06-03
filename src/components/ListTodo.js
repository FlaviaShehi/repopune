import React, { Fragment, useEffect, useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Button } from 'react-bootstrap'
import EditTodo from './EditTodo'
import './forms.css'

const ListTodo = () => {
  const [todos, setTodos] = useState([])

  //deleteTodo

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'DELETE',
      })

      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5001/todos')
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  console.log(todos)

  return (
    <Fragment>
      {todos.map((todo) => (
        <div id='rregullo'>
          <h3>{todo.task_name}</h3>

          <Button key={todo.todo_id} variant='primary' className='rregbutoni'>
            {/* <EditTodo todo={todo} /> */} Edit
          </Button>

          <button
            className='rregbutoni'
            key={todo.todo_id}
            onClick={() => deleteTodo(todo.todo_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </Fragment>
  )
}

export default ListTodo
