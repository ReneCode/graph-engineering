
import * as actionTypes from '../actionTypes'


export const setUserAction = (id, email) => {
  return {
    type: actionTypes.SET_USER,
    id,
    email
  }
}

export const loginUserAction = (email, password) => {
  return {
    type: actionTypes.LOGIN_USER,
    email,
    password
  }
}


export const setUserErrorAction = (errorCode, errorMessage ) => {
  return {
    type: actionTypes.SET_USER_ERROR,
    errorCode,
    errorMessage
  }
}
