
import * as actionTypes from '../actionTypes'


export const setUserAction = (id, email) => {
  return {
    type: actionTypes.SET_USER,
    id,
    email
  }
}


