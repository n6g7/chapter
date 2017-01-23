import firebase from './firebase';

const provider = new firebase.auth.GoogleAuthProvider();

export default {
  login() {
    return firebase.auth()
      .signInWithPopup(provider)
      .then(data => data.user);
  },
  logout() {
    return firebase.auth()
      .signOut();
  }
}
