import React, { Fragment } from 'react'
import './App.css'
import { Container, Row, Col } from 'react-grid-system'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

//components
import Robot from './components/Robot'
import Create from './components/Create'
import All from './components/All'
import FaqeTask from './components/FaqeTask'

const App = () => {
  return (
    <Fragment>
      <nav class='navbar-nav s-auto'>
        <div class='container-fluid'>
          <div class='navbar-header'>
            <div class='topnav-right'>
              <a>
                <b>This is a notebook</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Container>
        <Row>
          <Col lg={3}>
            <br /> <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
            <button className='butoni'>-Add New</button>
            <br /> <br />
            <button className='butoni'>-All Tasks</button>
          </Col>
          <Col lg={6}>
            <Router>
              <Switch>
                <Route path='/' exact>
                  <FaqeTask />
                </Route>
                <Route path='/All' exact>
                  <All />
                </Route>
                <Route path='/Create' exact>
                  <Create />
                </Route>
                <Route path='/Robot' exact>
                  <Robot />
                </Route>
                <Redirect to='/' />
              </Switch>
            </Router>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </Fragment>
  )
}
export default App
