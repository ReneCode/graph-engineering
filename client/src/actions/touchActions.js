
import * as actionTypes from "../actionTypes";

export const touchStart = (event) => {
  return {
    type: actionTypes.TOUCH_START,
    event: event
  }
}

export const touchMove = (event) => {
  return {
    type: actionTypes.TOUCH_MOVE,
    event: event
  }
}

export const touchEnd = (event) => {
  return {
    type: actionTypes.TOUCH_END,
    event: event
  }
}
