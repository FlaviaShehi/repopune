import React, { Fragment, useState } from 'react'
import { Card } from 'react-bootstrap'
import './forms.css'
import ListCategory from './ListCategory'
import DatePicker from 'react-datepicker'

function Create() {
  const [description, setDescription] = useState({
    task_name: '',
    notes: '',
    date: '',
    category_id: '',
  })

  const [startDate, setStartDate] = useState(new Date())

  const onSubmitForm = async (e) => {
    e.preventDefault()
    // console.log(e)
    try {
      // console.log(description)
      const body = description

      const response = await fetch('http://localhost:5001/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      window.location = '/All'
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <Card className='forma'>
        <Card.Header className='text'>
          <h2>CREATE</h2>
          <h2>New Task</h2>
          <input
            type='text'
            className='text1'
            value={description.task_name}
            onChange={(e) => {
              setDescription({ ...description, task_name: e.target.value })
            }}
          />
        </Card.Header>
        <Card.Body>
          <h3>Notes:</h3>
          <input
            type='text'
            value={description.notes}
            onChange={(e) =>
              setDescription({ ...description, notes: e.target.value })
            }
          />
          <h3>Date:</h3>
          {/* <input
            type='date'
            value={description.date}
            onChange={(e) => setDescription(e.target.value)}
          /> */}
          <DatePicker
            description={description}
            setDescription={setDescription}
            selected={startDate}
            onChange={(date) => {
              setStartDate(date)
              setDescription({ ...description, date: startDate })
            }}
          />
          <h3> Category:</h3>
          <ListCategory
            setDescription={setDescription}
            description={description}
          />
          <div>
            <br />
            <button className='create' onClick={onSubmitForm}>
              Create
            </button>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default Create
