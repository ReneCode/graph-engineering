
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes'
import * as userSagas from './userSagas'
import * as projectSagas from './projectSagas'

const sagas = [
  takeLatest(actionTypes.LOGIN_USER, userSagas.loginUserSaga),
  takeLatest(actionTypes.LOGOUT_USER, userSagas.logoutUserSaga),
  takeLatest(actionTypes.REGISTER_USER, userSagas.registerUserSaga),
  takeLatest(actionTypes.LOAD_PROJECTS, projectSagas.loadProjectsSaga)
]

export default sagas

