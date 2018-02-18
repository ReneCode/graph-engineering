import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import LoginUser from './LoginUser'
import RegisterUser from './RegisterUser'
import Projects from './ProjectList/Projects'

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ LoginUser } />
      <Route exact path="/register" component={ RegisterUser } />
      <Route exact path="/projects" component={ Projects } />
    </div>
  </Router>
)

export default Routing
