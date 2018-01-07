import React from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'

import Routing from './components/Routing'
import store from './store'

/*eslint-disable no-unused-vars*/
import firebase from './firebase'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

const App = () => (
  <MuiThemeProvider theme={ theme }>
    <Provider store={ store }>
      <Routing />
    </Provider>
  </MuiThemeProvider>
)

export default App
