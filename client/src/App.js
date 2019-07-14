import React from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import MainFrame from "./components/MainFrame";

import store from './store'

import * as actions from './actions'

import { firebase } from './firebase'

import "./App.css"

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(actions.setUserAction(user.uid, user.email))
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => (
  // <MuiThemeProvider theme={theme}>
    <Provider store={ store }>
      <MainFrame />
    </Provider>
  // </MuiThemeProvider>
)

export default App
