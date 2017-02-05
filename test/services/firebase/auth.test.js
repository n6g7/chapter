jest.mock('../../../src/services/firebase/firebase', () => {
  const authData = {
    onAuthStateChanged: jest.fn(() => {}),
    signInWithPopup: jest.fn(() => Promise.resolve({
      user: 'userdata'
    })),
    signOut: jest.fn(() => Promise.resolve({})),
  };

  const auth = jest.fn(() => authData);
  auth.GoogleAuthProvider = function() {};
  auth.onAuthStateChanged = authData.onAuthStateChanged;
  auth.signInWithPopup = authData.signInWithPopup;
  auth.signOut = authData.signOut;

  return {
    auth,
  };
});

import auth from '../../../src/services/firebase/auth';

const firebase = require('../../../src/services/firebase/firebase');

describe('Firebase Auth', () => {
  describe('authChannel', () => {

    it('returns a function...', () => {
      const result = auth.authChannel();
      expect(result).toBeInstanceOf(Function);
    });

    it('...which returns a promise', () => {
      const result = auth.authChannel();
      expect(result()).toBeInstanceOf(Promise);
    });

  });
  describe('login', () => {

    it('returns a promise', () => {
      const result = auth.login();
      expect(result).toBeInstanceOf(Promise);
    });

    it('calls firebase.signInWithPopup', () => {
      auth.login();

      expect(firebase.auth).toHaveBeenCalled();
      expect(firebase.auth.signInWithPopup).toHaveBeenCalled();
    });

    it('returns user data', () => {
      return auth.login()
      .then(user => {
        expect(user).toEqual('userdata');
      });
    });

  });
  describe('logout', () => {

    it('returns a promise', () => {
      const result = auth.logout();
      expect(result).toBeInstanceOf(Promise);
    });

    it('calls firebase.signOut', () => {
      auth.logout();

      expect(firebase.auth).toHaveBeenCalled();
      expect(firebase.auth.signOut).toHaveBeenCalled();
    });

  });
});
