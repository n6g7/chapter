import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {addBook} from '../src/core';

describe('Core logic', () => {
  describe('addBook', () => {
    const newBook = fromJS({
      "ISBN": "9780451417855",
      "title": "Flatland",
      "startDate": "2015-02",
      "endDate": "2015-02",
      "state": "read"
    });

    it('adds a book to the library', () => {
      const state = fromJS({
        library: {
          books: [
            {
              "ISBN": "9782253001676",
              "title": "Je suis Pilgrim",
              "startDate": "2016",
              "endDate": "2016-04-17",
              "state": "read"
            }
          ]
        }
      });
      const nextState = addBook(state, newBook);

      expect(nextState).to.equal(fromJS({
        library: {
          books: [
            {
              "ISBN": "9782253001676",
              "title": "Je suis Pilgrim",
              "startDate": "2016",
              "endDate": "2016-04-17",
              "state": "read"
            },
            {
              "ISBN": "9780451417855",
              "title": "Flatland",
              "startDate": "2015-02",
              "endDate": "2015-02",
              "state": "read"
            }
          ]
        }
      }))
    });

    it('creates a book list when empty', () => {
      const state = Map();
      const nextState = addBook(state, newBook);

      expect(nextState).to.equal(fromJS({
        library: {
          books: [
            {
              "ISBN": "9780451417855",
              "title": "Flatland",
              "startDate": "2015-02",
              "endDate": "2015-02",
              "state": "read"
            }
          ]
        }
      }))
    });
  });
});
