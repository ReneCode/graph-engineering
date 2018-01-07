
import * as actionTypes from '../actionTypes'

const initialState = {
  id: null,
  email: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        id: action.id,
        email: action.email
      }

    default:
      return state
  }
}

export default userReducer
