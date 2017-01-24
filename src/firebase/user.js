import firebase from './firebase';

const database = firebase.database();

export default {
  save(uid, data) {
    return database.ref(`users/${uid}`).set(data);
  }
};
