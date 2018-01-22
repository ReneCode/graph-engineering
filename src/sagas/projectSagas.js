import { put } from 'redux-saga/effects'

import * as actions from '../actions'
// import * as firebase from 'firebase'

// import * as actions from '../actions'


import { db } from '../firebase'
// import {firebase} from 'firebase'
// const db = firebase.firestore()

const test = () => {
  return 42;
}


export function *loadProjectsSaga() {
  console.log("loadProjectsSaga!")
  
  try {
    const snapshot  = yield db.collection('projects').get()
    const projects = []
    snapshot.forEach( doc => {
      projects.push(doc.data())
    })
    yield put(actions.setProjectsAction(projects))
  } catch (error) {
    console.log("loadProjectsSaga:", error)
  }
}

export function* saveProjectSaga({project}) {
  try {
    yield test()
    console.log("ABC")
    console.log("db:", db)
    console.log("db.col:", db.collection('projects'))
    const docRef = yield db.collection('projects').add({name:project.name})
    console.log("docRef:", docRef)
  } catch (error) {
    console.log("error:", error)
  }
}