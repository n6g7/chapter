import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC2PVLteeEKm0YmFE6oizPiXTRiW8qyy8o',
  authDomain: 'bamboo-theorem-b8d0a.firebaseapp.com',
  databaseURL: 'https://bamboo-theorem-b8d0a.firebaseio.com',
  projectId: 'bamboo-theorem',
  storageBucket: 'bamboo-theorem.appspot.com',
  messagingSenderId: '148736092439'
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export const authProvider = new firebase.auth.GoogleAuthProvider()

export default rsf
