import React, { Fragment, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const EditTodo = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Fragment>
      <Button variant='primary' onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

export default EditTodo
