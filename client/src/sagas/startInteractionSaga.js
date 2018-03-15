import { call } from "redux-saga/effects";

import { generateLineSaga } from "./generateLineSaga";
import { generateCircleSaga } from "./generateCircleSaga";
import { selectItemSaga } from "./selectItemSaga";
import { IA_GENERATE_CIRCLE, IA_GENERATE_LINE, IA_SELECT_ITEM } from "../actions/interactionTypes";


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

    default:
  }

}
