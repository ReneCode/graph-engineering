import { put } from 'redux-saga/effects'

import * as actions from '../actions'
import Project from '../models/Project'

import { db } from '../firebase'


export function* loadProjectsSaga() {
  try {
    const snapshot = yield db.collection('projects').get()
    const projects = []
    snapshot.forEach(doc => {
      projects.push(new Project(doc.data(), doc.id))
    })
    yield put(actions.setProjectsAction(projects))
  } catch (error) {
    console.log("loadProjectsSaga:", error)
  }
}

export function* saveProjectSaga({project}) {
  try {
    const document = project.toDocument()
    const docRef = yield db.collection('projects').add(document)

    // new id from database
    const id = docRef.id
    project.id = id
    yield put(actions.appendProjectAction(project))
  } catch (error) {
    console.log("error:", error)
  }
}