
import  * as actionTypes from "../actionTypes";

export const setDynamicItem = item => {
  return {
    type: actionTypes.SET_DYNAMIC_ITEM,
    item
  }
}

export const removeDynamicItem = item => {
  return {
    type: actionTypes.REMOVE_DYNAMIC_ITEM,
    item
  }
}

export const setSelectedItem = item => {
  return {
    type: actionTypes.SET_SELECTED_ITEM,
    item
  }
}

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    item
  }
}