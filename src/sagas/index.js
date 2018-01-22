
import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actionTypes'
import * as userSagas from './userSagas'
import * as projectSagas from './projectSagas'

const sagas = [
  takeLatest(actionTypes.LOGIN_USER, userSagas.loginUserSaga),
  takeLatest(actionTypes.REGISTER_USER, userSagas.registerUserSaga),
  takeLatest(actionTypes.SAVE_PROJECT, projectSagas.saveProjectSaga),
  takeLatest(actionTypes.LOAD_PROJECTS, projectSagas.loadProjectsSaga)
]

export default sagas

