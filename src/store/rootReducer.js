import { combineReducers } from 'redux'

import user from '../reducers/userReducer'
import project from '../reducers/projectReducer'

export default combineReducers({
  user,
  project
})

