import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {addBook} from '../src/core';

describe('Core logic', () => {
  describe('addBook', () => {
    const newBook = fromJS({
      ISBN: '9780451417855',
      title: 'Flatland',
      startDate: '2015-02',
      endDate: '2015-02',
      state: 'read'
    });

    it('adds a book to the library', () => {
      const state = fromJS({
        library: {
          books: [
            {
              ISBN: '9782253001676',
              title: 'Je suis Pilgrim',
              startDate: '2016',
              endDate: '2016-04-17',
              state: 'read',
              uuid: 'aaa'
            }
          ]
        }
      });
      const nextState = addBook(state, newBook);

      const nextBooks = nextState.getIn(['library', 'books']);
      expect(nextBooks.count()).to.equal(2);

      const nextBook = nextBooks.get(1);
      expect(nextBook).to.have.property('ISBN', '9780451417855');
      expect(nextBook).to.have.property('title', 'Flatland');
      expect(nextBook).to.have.property('startDate', '2015-02');
      expect(nextBook).to.have.property('endDate', '2015-02');
      expect(nextBook).to.have.property('state', 'read');
      expect(nextBook).to.have.property('uuid');
    });

    it('creates a book list when empty', () => {
      const state = Map();
      const nextState = addBook(state, newBook);

      expect(nextState).to.have.deep.property(['library', 'books']);

      const nextBooks = nextState.getIn(['library', 'books']);
      expect(nextBooks.count()).to.equal(1);
    });

    it('adds a uuid to the book', () => {
      const state = fromJS({
        library: {
          books: []
        }
      });
      const nextState = addBook(state, newBook);

      const books = nextState.getIn(['library', 'books']);
      expect(books.count()).to.equal(1);

      const book = books.get(0);
      expect(book).to.have.property('uuid');

      const uuid = book.get('uuid');
      expect(uuid).to.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
    });
  });
});
