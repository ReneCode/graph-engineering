import { call, put } from "redux-saga/effects";

import { generateRectangleSaga } from "./generateRectangleSaga";
import { generateLineSaga } from "./generateLineSaga";
import { generateCircleSaga } from "./generateCircleSaga";
import { selectItemSaga } from "./selectItemSaga";
import { connectItemsSaga } from "./connectItemsSaga";

import { IA_GENERATE_CIRCLE, IA_GENERATE_LINE, IA_SELECT_ITEM, IA_CONNECT_ITEMS, IA_GENERATE_RECTANGLE } from "../actions/interactionTypes";
import * as actions from "../actions";


function* startInteraction(interactionType) {
  switch (interactionType) {
    case IA_GENERATE_RECTANGLE:
      yield call(generateRectangleSaga);
      break;
    case IA_GENERATE_CIRCLE:
      yield call(generateCircleSaga);
      break;
    case IA_GENERATE_LINE:
      yield call(generateLineSaga);
      break;
    case IA_SELECT_ITEM:
      yield call(selectItemSaga);
      break;
    case IA_CONNECT_ITEMS:
      yield call(connectItemsSaga);
      break;

    default:
      throw new Error(`unhandled interaction type: ${interactionType}`);
  }
}

export function* startInteractionSaga({ interactionType }) {
  try {
    yield startInteraction(interactionType);
  } catch(exception) {
    yield put( actions.setExceptionMessageAction(exception.message) );
  }


}
