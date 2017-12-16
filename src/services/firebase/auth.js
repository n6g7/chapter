import firebase from './firebase'

const provider = new firebase.auth.GoogleAuthProvider()

export default {
  authChannel () {
    const resolveQueue = []

    firebase.auth().onAuthStateChanged(
      user => {
        while (resolveQueue.length) {
          resolveQueue.shift().resolve(user)
        }
      },
      () => {
        while (resolveQueue.length) {
          resolveQueue.shift().reject()
        }
      }
    )

    return () => new Promise(
      (resolve, reject) => resolveQueue.push({ resolve, reject })
    )
  },
  login () {
    return firebase.auth()
      .signInWithPopup(provider)
      .then(data => data.user)
  },
  logout () {
    return firebase.auth()
      .signOut()
  }
}
