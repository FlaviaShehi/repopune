import React, { Fragment } from 'react'
import './forms.css'
import { Card } from 'react-bootstrap'
import logojaall from './logojaall.svg'
import ListTodo from './ListTodo'

const FaqeTask = () => {
  return (
    <Fragment>
      <div className='head'>
        <Card.Header>
          <img src={logojaall} className='foto' />
        </Card.Header>
        <hr />
        <Card.Body>
          <h4>Hello:</h4>
          <ListTodo />
        </Card.Body>
      </div>
    </Fragment>
  )
}

export default FaqeTask
