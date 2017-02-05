jest.mock('../../../src/services/firebase/firebase', () => {
  const onceSuccess = () => Promise.resolve({
    exists: () => true,
    val: () => ({
      a: 1
    })
  });
  const onceFailure = () => Promise.resolve({
    exists: () => false,
  });
  const pushSuccess = () => Promise.resolve({});
  const setSuccess = () => Promise.resolve({});

  const once = jest.fn(onceSuccess)
    .mockImplementationOnce(onceSuccess)
    .mockImplementationOnce(onceSuccess)
    .mockImplementationOnce(onceSuccess)
    .mockImplementationOnce(onceFailure);
  const push = jest.fn(pushSuccess);
  const set = jest.fn(setSuccess);
  const ref = jest.fn(() => ({
    once,
    push,
    set
  }));

  return {
    auth: () => ({
      currentUser: {
        uid: 1
      }
    }),
    database: () => ({
      ref
    }),
    ref,
    once,
    push,
    set
  }
});

import bookApi from '../../../src/services/firebase/book';

const firebase = require('../../../src/services/firebase/firebase');

describe('Firebase Book API', () => {
  describe('list()', () => {

    it('returns a promise', () => {
      expect(bookApi.list()).toBeInstanceOf(Promise);
    });

    it("calls once('value')", () => {
      bookApi.list();
      expect(firebase.ref).toHaveBeenCalledWith('books/1');
      expect(firebase.once).toHaveBeenCalledWith('value');
    });

    it('returns correct data', () => {
      return bookApi.list()
      .then(data => {
        expect(data).toEqual({ a: 1 })
      });
    });

    it('returns an empty object if ref does not exist', () => {
      return bookApi.list()
      .then(data => {
        expect(data).toEqual({})
      });
    });

  });

  describe('create(data)', () => {
    const bookData = {
      a: 1
    };

    it('returns a promise', () => {
      expect(bookApi.create(bookData)).toBeInstanceOf(Promise);
    });

    it('calls push(bookData)', () => {
      bookApi.create(bookData);
      expect(firebase.ref).toHaveBeenCalledWith('books/1');
      expect(firebase.push).toHaveBeenCalledWith(bookData);
    });

  });

  describe('update(bid, data)', () => {
    const bookData = {
      a: 1
    };

    it('returns a promise', () => {
      const result = bookApi.update('abc', bookData);
      expect(result).toBeInstanceOf(Promise);
    });

    it('calls set(bookData)', () => {
      bookApi.update('abc', bookData);
      expect(firebase.ref).toHaveBeenCalledWith('books/1/abc');
      expect(firebase.set).toHaveBeenCalledWith(bookData);
    });

  });
});
