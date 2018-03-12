import { combineReducers } from 'redux'

import user from '../reducers/userReducer'
import project from '../reducers/projectReducer'
import page from '../reducers/pageReducer'
import svg from "../reducers/svgReducer";
import status from "../reducers/statusReducer";

export default combineReducers({
  user,
  project,
  page,
  svg,
  status
})

