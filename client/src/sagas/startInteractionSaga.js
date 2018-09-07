import { call } from "redux-saga/effects";

import { generateLineSaga } from "./generateLineSaga";
import { generateCircleSaga } from "./generateCircleSaga";
import { selectItemSaga } from "./selectItemSaga";
import { connectItemsSaga } from "./connectItemsSaga";

import { IA_GENERATE_CIRCLE, IA_GENERATE_LINE, IA_SELECT_ITEM, IA_CONNECT_ITEMS } from "../actions/interactionTypes";


export function* startInteractionSaga({ interactionType }) {
  switch (interactionType) {
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
      throw new Error("unhandled interaction type:", interactionType);
  }

}
