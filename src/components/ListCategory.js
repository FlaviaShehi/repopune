import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'
import { propTypes } from 'react-bootstrap/esm/Image'
const axios = require('axios')

const ListCategory = () => {
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
        categories.map((category) => (
          <button
            className='butonii'
            key={category.category_id}
            value={category.category_id}
            onClick={(category) => {
              getCat(category.target.value)
            }}
          >
            {category.category_name}
          </button>
        ))}
    </Fragment>
  )
}

export default ListCategory
