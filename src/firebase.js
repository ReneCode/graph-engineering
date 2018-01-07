
import { firebase } from '@firebase/app'

const config = {
  apiKey: "AIzaSyDSzhfoYZtvJKUEMLc-RVvgZiP7j4MQVlA",
  authDomain: "graph-engineering.firebaseapp.com",
  databaseURL: "https://graph-engineering.firebaseio.com",
  projectId: "graph-engineering",
  storageBucket: "graph-engineering.appspot.com",
  messagingSenderId: "213769611125"
}
firebase.initializeApp(config)

export default firebase
