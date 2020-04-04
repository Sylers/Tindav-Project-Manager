import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetail'
import Signin from './components/auth/Signin'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/projects/:id' component={ProjectDetails} />
              <Route path='/signin' component={Signin}/>
              <Route path='/signUp' component={SignUp}/>
              <Route path='/create' component={CreateProject}/>
            </Switch>
        </div>
      </Router>
    )
  }
}

