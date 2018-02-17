import React from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from 'material-ui/styles'

import Routing from './components/Routing'
import store from './store'

import * as actions from './actions'

import firebase from './firebase'

firebase.auth().onAuthStateChanged(user => {
  store.dispatch(actions.setUserAction(user.uid, user.email))
})

const App = () => (
  <MuiThemeProvider >
    <Provider store={ store }>
      <Routing />
    </Provider>
  </MuiThemeProvider>
)

export default App
