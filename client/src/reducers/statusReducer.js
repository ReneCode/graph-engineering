
import * as actionTypes from "../actionTypes";

const initialState = {
  status: ""
}

function statusReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
}

export default statusReducer;
