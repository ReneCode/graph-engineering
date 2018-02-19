
import * as actionTypes from '../actionTypes'

const initialState = {
  id: null,
  email: null,
  errorCode: null,
  errorMessage: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        id: action.id,
        email: action.email
      }

    case actionTypes.SET_USER_ERROR:
      return {
        ...state,
        errorCode: action.errorCode,
        errorMessage: action.errorMessage
      }

    default:
      return state
  }
}

export default userReducer
