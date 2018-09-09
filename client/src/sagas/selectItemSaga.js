import { put, select } from 'redux-saga/effects'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

import { getPickRadius } from "./select";
import pickNearestItem from "../utilities/pickNearestItem";

import { getSVGPointSaga } from "./mouseSagas";
import { IA_SELECT_ITEM } from '../actions/interactionTypes';

function* getItems() {
  const getPageState = state => state.page;
  const pageState = yield select(getPageState);
  return pageState.items;
}

function* getSelectedItems() {
  const getPageState = state => state.page;
  const pageState = yield select(getPageState);
  return pageState.selectedItems;
}

function* moveSelectedItemsSaga(lastPoint) {
  let wait = true;
  while (wait) {
    const result = yield getSVGPointSaga([actionTypes.MOUSE_MOVE, actionTypes.MOUSE_UP]);
    if (!result) {
      return;
    }
    const delta = result.point.sub(lastPoint);
    switch (result.type) {
      case actionTypes.MOUSE_UP:
        wait = false;
        break;
      case actionTypes.MOUSE_MOVE:
        yield put(actions.moveSelectedItems(delta));
        lastPoint = result.point;
        break;

      default:
        throw new Error("bad type")
    }
  }
}


export function* selectItemSaga() {
  yield put(actions.setStatus("SelectItem"));

  const result = yield getSVGPointSaga(actionTypes.MOUSE_DOWN)
  yield put(actions.setStatus());
  if (!result) {
    return
  }

  const pickRadius = getPickRadius();
  const { point } = result;

  const selectedItems = yield getSelectedItems();
  const pickedItem = pickNearestItem(selectedItems, point, pickRadius);
  if (pickedItem) {
    // item was already selected
    yield moveSelectedItemsSaga(point);
  } else {
    const items = yield getItems();
    const pickedItem = pickNearestItem(items, point, pickRadius);

    if (pickedItem) {
      // new Item picked
      yield put(actions.selectItem(pickedItem));
      yield moveSelectedItemsSaga(point);
    } else {
      // no Item picked
      yield put(actions.unselectItems());
    }
  }

  yield put(actions.startInteraction(IA_SELECT_ITEM));
}
