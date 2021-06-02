import React, { Fragment } from 'react'
import logo from './logo.svg'
import './forms.css'
import { Container, Row, Col } from 'react-grid-system'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Create from './Create'

const Robot = () => {
  return (
    <Fragment>
      <Container>
        <Router>
          <Row>
            <Col lg={6}>
              <Link to='/Create'>
                <img src={logo} className='logo' onClick={'/Create'} />
              </Link>
            </Col>

            <Col lg={3}>
              <br />
              <br />
              <p>
                <b>There is no note available press on “+” to add new </b>
              </p>
            </Col>
          </Row>
        </Router>
      </Container>
    </Fragment>
  )
}

export default Robot
