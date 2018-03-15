import { put, select } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

import pickNearestItem from "../utilities/pickNearestItem";

import { getSVGPointSaga } from "./mouseSagas";
import { IA_SELECT_ITEM } from '../actions/interactionTypes';

function* getItems() {
  const getPageState = state => state.page;
  const pageState = yield select(getPageState);
  return pageState.items;
}

export function* selectItemSaga() {
  yield put(actions.setStatus("SelectItem"));

  const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN)
  yield put(actions.setStatus());
  if (!result) {
    return
  }

  const pickRadius = 10;
  const { point } = result;
  const items = yield getItems();

  const pickedItem = pickNearestItem(items, point, pickRadius);
  if (pickedItem) {
    yield put(actions.selectItem(pickedItem));
  } else {
    yield put(actions.unselectItems());
  }

  yield put(actions.startInteraction(IA_SELECT_ITEM));
}
