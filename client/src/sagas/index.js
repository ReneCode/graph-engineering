
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes'
import * as userSagas from './userSagas'
import * as projectSagas from './projectSagas'
// import * as pageSagas from './pageSagas'

import { generateLineSaga } from "./generateLineSaga";
import { generateCircleSaga } from "./generateCircleSaga";
import { selectItemSaga } from "./selectItemSaga";

const sagas = [
  takeLatest(actionTypes.LOGIN_USER, userSagas.loginUserSaga),
  takeLatest(actionTypes.LOGOUT_USER, userSagas.logoutUserSaga),
  takeLatest(actionTypes.REGISTER_USER, userSagas.registerUserSaga),
  takeLatest(actionTypes.LOAD_PROJECTS, projectSagas.loadProjectsSaga),
  // takeLatest(actionTypes.LOAD_PAGES, pageSagas.loadPagesSaga),

  takeLatest(actionTypes.GENERATE_LINE, generateLineSaga),
  takeLatest(actionTypes.GENERATE_CIRCLE, generateCircleSaga),

  takeLatest(actionTypes.SELECT_ITEM, selectItemSaga)
]

export default sagas

