import { combineReducers } from 'redux'

import user from '../reducers/userReducer'
import project from '../reducers/projectReducer'
import page from '../reducers/pageReducer'

export default combineReducers({
  user,
  project,
  page
})

