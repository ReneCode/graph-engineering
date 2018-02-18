import React from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Routing from './components/Routing'
import store from './store'

import * as actions from './actions'

import { firebase } from './firebase'

import "./App.css"

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(actions.setUserAction(user.uid, user.email))
})

const theme = createMuiTheme();

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={ store }>
      <Routing />
    </Provider>
  </MuiThemeProvider>
)

export default App
