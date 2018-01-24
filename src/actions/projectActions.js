
import * as actionTypes from '../actionTypes'


export const loadProjectsAction = () => {
  return {
    type: actionTypes.LOAD_PROJECTS
  }
}


export const saveProjectAction = (project) => {
  return {
    type: actionTypes.SAVE_PROJECT,
    project
  }
}

export const appendProjectAction = (project) => {
  return {
    type: actionTypes.APPEND_PROJECT,
    project
  }
}

export const setProjectsAction = (projects) => {
  return {
    type: actionTypes.SET_PROJECTS,
    projects
  }
}
