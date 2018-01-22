
// import { firebase } from '@firebase/app'
import firebase from 'firebase'
require('firebase/firestore')

const config = {
  apiKey: "AIzaSyDSzhfoYZtvJKUEMLc-RVvgZiP7j4MQVlA",
  authDomain: "graph-engineering.firebaseapp.com",
  databaseURL: "https://graph-engineering.firebaseio.com",
  projectId: "graph-engineering",
  storageBucket: "graph-engineering.appspot.com",
  messagingSenderId: "213769611125"
}
const app = firebase.initializeApp(config)
const db = firebase.firestore(app)

export { 
  firebase,
  app,
  db }
