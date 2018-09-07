
import * as actionTypes from "../actionTypes";

const initialState = {
  status: "",
  exceptionMessage: undefined
}

function statusReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    case actionTypes.SET_EXCEPTION:
      return {
        ...state,
        exceptionMessage: action.exceptionMessage
      };

    default:
      return state;
  }
}

export default statusReducer;
