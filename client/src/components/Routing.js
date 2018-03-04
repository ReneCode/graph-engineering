import React from 'react'
import { Route } from 'react-router-dom'

import GraphicalEditor from './GraphicalEditor'
import LoginUser from './LoginUser'
import RegisterUser from './RegisterUser'
import Projects from './ProjectList/Projects'
import Pages from "./PageList/Pages"

const Routing = () => (
  <div className="main-content">
    <Route exact path="/" component={GraphicalEditor} />
    <Route exact path="/login" component={LoginUser} />
    <Route exact path="/register" component={RegisterUser} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/projects/:projectId" component={Pages} />
  </div>
)

export default Routing
