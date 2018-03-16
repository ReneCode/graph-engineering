import { put, select } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

import pickNearestItem from "../utilities/pickNearestItem";

import { getSVGPointSaga } from "./mouseSagas";

function* pickItem() {
  let wait = true;
  while (wait) {
    const result = yield getSVGPointSaga([actionTypes.MOUSE_DOWN, actionTypes.MOUSE_UP, actionTypes.MOUSE_MOVE])
    if (!result) {
      return;
    }

    const pickRadius = 10;
    const getPageState = state => state.page;
    const pageState = yield select(getPageState);
    const pickedItem = pickNearestItem(pageState.items, result.point, pickRadius);

    if (result.type === actionTypes.MOUSE_MOVE) {
      yield put(actions.highlightItem(pickedItem));
    } else {
      yield put(actions.highlightItem());
      return pickedItem;
    }
  }
}

export function* connectItemsSaga() {
  yield put(actions.setStatus("Connect Items"));

  const firstItem = yield pickItem();
  yield put(actions.setStatus());

  // if (result.type === actionTypes.MOUSE_MOVE) {
  //   if (pickedItem) {
  //     yield put(actions.highlightItem(pickedItem));
  //   } else {
  //     yield put(actions.highlightItem());
  //   }
  // } else {
  //   if (pickedItem) {
  //     yield put(actions.selectItem(pickedItem));
  //   } else {
  //     yield put(actions.unselectItems());
  //   }
  // }

  // yield put(actions.startInteraction(IA_SELECT_ITEM));
}
