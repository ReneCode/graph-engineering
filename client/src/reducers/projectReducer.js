
import * as actionTypes from '../actionTypes'

const initialState = {
  projects: []
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PROJECTS:
      return {
        ...state,
        projects: action.projects
      }

    default:
      return state
  }
}

export default projectReducer
