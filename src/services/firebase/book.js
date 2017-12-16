import firebase from './firebase'

const database = firebase.database()

const getUid = () => firebase.auth().currentUser.uid

export default {
  list () {
    return database.ref(`books/${getUid()}`)
      .once('value')
      .then(s => s.exists() ? s.val() : {})
  },

  create (data) {
    return database.ref(`books/${getUid()}`).push(data)
  },

  update (bid, data) {
    return database.ref(`books/${getUid()}/${bid}`).set(data)
  },

  delete (bid) {
    return database.ref(`books/${getUid()}/${bid}`).remove()
  }
}
