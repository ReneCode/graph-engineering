
import * as actionTypes from "../actionTypes";

export const mouseMove = (event) => {
  return {
    type: actionTypes.MOUSE_MOVE,
    event: event
  }
}


export const mouseDown = (event) => {
  return {
    type: actionTypes.MOUSE_DOWN,
    event: event
  }
}

export const mouseUp = (event) => {
  return {
    type: actionTypes.MOUSE_UP,
    event: event
  }
}
