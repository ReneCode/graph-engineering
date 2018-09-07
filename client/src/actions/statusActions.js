
import * as actionTypes from "../actionTypes";

export const setStatus = status => {
  return {
    type: actionTypes.SET_STATUS,
    status
  }
}

export const setExceptionMessageAction = (exceptionMessage) => {
  return {
    type: actionTypes.SET_EXCEPTION,
    exceptionMessage: exceptionMessage
  }
}
