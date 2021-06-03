import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'
import { propTypes } from 'react-bootstrap/esm/Image'
const axios = require('axios')

const ListCategory = ({ setDescription, description }) => {
  const [categories, setCategories] = useState('')

  const getCat = async () => {
    try {
      const res = await axios.get('http://localhost:5000/categories')
      // console.log('Kerkesa')

      console.log(res)
      setCategories(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!categories) {
      getCat()
    }
  }, [])

  return (
    <Fragment>
      {categories &&
        categories.map((c) => (
          <button
            className='rregullobutoni'
            key={c.category_id}
            value={c.category_id}
            onClick={() => {
              setDescription({ ...description, category_id: c.category_id })
              console.log(description)
              // getCat(c.target.value)
            }}
          >
            {c.category_name}
          </button>
        ))}
    </Fragment>
  )
}

export default ListCategory
