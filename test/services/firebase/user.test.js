jest.mock('../../../src/services/firebase/firebase', () => {
  const setSuccess = () => Promise.resolve({});

  const set = jest.fn(setSuccess);
  const ref = jest.fn(() => ({
    set
  }));

  return {
    database: () => ({
      ref
    }),
    ref,
    set
  }
});

import userApi from '../../../src/services/firebase/user';

const firebase = require('../../../src/services/firebase/firebase');

describe('Firebase User API', () => {
  describe('save(uid, data)', () => {
    const userData = {
      a: 1
    };

    it('returns a promise', () => {
      const result = userApi.save('abc', userData);
      expect(result).toBeInstanceOf(Promise);
    });

    it('calls set(bookData)', () => {
      userApi.save('abc', userData);
      expect(firebase.ref).toHaveBeenCalledWith('users/abc');
      expect(firebase.set).toHaveBeenCalledWith(userData);
    });

  });
});
