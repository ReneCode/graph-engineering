
import * as actionTypes from '../actionTypes'


export const loadPagesAction = (projectId) => {
  return {
    type: actionTypes.LOAD_PAGES,
    projectId
  }
}

export const setPagesAction = (pages) => {
  return {
    type: actionTypes.SET_PAGES,
    pages
  }
}
