import React, { Fragment, useState, useEffect } from 'react'
import ListCategory from './ListCategory'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Card, Button, ButtonGroup, Dropdown } from 'react-bootstrap'
import ListTodo from './ListTodo'
import './forms.css'

const All = () => {
  const [categories, setCategories] = useState([])
  const [todos, setTodos] = useState([])

  // categories

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/categories')
      const jsonData = await response.json()

      setCategories(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  //delete category
  const deleteCategory = async (id) => {
    try {
      const deleteCategory = await fetch(
        `http://localhost:5000/categories/${id}`,
        {
          method: 'DELETE',
        }
      )

      setCategories(
        categories.filter((category) => category.category_id !== id)
      )
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <Card className='forma text-center'>
        <Card.Header>
          <ListCategory />
          <hr />
        </Card.Header>
        <Card.Body>
          <Dropdown as={ButtonGroup}>
            <Button variant='success' className='deletecat '>
              Delete Category
            </Button>

            <Dropdown.Toggle
              split
              variant='success'
              id='dropdown-split-basic'
            />
            <Dropdown.Menu>
              {categories.map((cat) => (
                <Dropdown.Item
                  href='#/action-1'
                  key={cat.category_id}
                  onClick={() => deleteCategory(cat.category_id)}
                >
                  {cat.category_name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <hr />
        <Card.Footer>
          <ListTodo />
        </Card.Footer>
      </Card>
    </Fragment>
  )
}

export default All
