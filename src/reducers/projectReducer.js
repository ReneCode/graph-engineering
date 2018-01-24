
import * as actionTypes from '../actionTypes'

const initialState = {
  projects: []
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.APPEND_PROJECT:
      return {
        ...state,
        projects: state.projects.concat(action.project)
      }

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
