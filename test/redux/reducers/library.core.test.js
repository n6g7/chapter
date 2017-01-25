import { Map, fromJS } from 'immutable';

import { addBook, updateBook, removeBook } from '../../../src/redux/reducers/library.core';

describe('Library core logic', () => {
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
      });
      const nextState = addBook(state, newBook);

      const nextBooks = nextState.getIn(['books']);
      expect(nextBooks.count()).toBe(2);

      const nextBook = nextBooks.get(1);
      expect(nextBook.get('ISBN')).toBe('9780451417855');
      expect(nextBook.get('title')).toBe('Flatland');
      expect(nextBook.get('startDate')).toBe('2015-02');
      expect(nextBook.get('endDate')).toBe('2015-02');
      expect(nextBook.get('state')).toBe('read');
      expect(nextBook.get('uuid')).toBeDefined();
    });

    it('adds a uuid to the book', () => {
      const state = fromJS({
        books: []
      });
      const nextState = addBook(state, newBook);

      const books = nextState.getIn(['books']);
      expect(books.count()).toBe(1);

      const book = books.get(0);
      expect(book.get('uuid')).toBeDefined();

      const uuid = book.get('uuid');
      expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);
    });
  });

  describe('updateBook', () => {
    it('updates a book', () => {
      const state = fromJS({
        books: [
          {
            ISBN: '123',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'abc'
          }
        ]
      });
      const nextState = updateBook(state, Map({
        ISBN: '456',
        title: 'Yo',
        startDate: 'now',
        endDate: 'later',
        state: 'reading',
        uuid: 'abc'
      }));

      const nextBooks = nextState.getIn(['books']);
      expect(nextBooks.count()).toBe(1);

      const nextBook = nextBooks.get(0);
      expect(nextBook.get('ISBN')).toBe('456');
      expect(nextBook.get('title')).toBe('Yo');
      expect(nextBook.get('startDate')).toBe('now');
      expect(nextBook.get('endDate')).toBe('later');
      expect(nextBook.get('state')).toBe('reading');
      expect(nextBook.get('uuid')).toBe('abc');
    });

    it('updates a book without changing its position', () => {
      const state = fromJS({
        books: [
          {
            ISBN: '123',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'abc'
          },
          {
            ISBN: '456',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'def'
          },
          {
            ISBN: '789',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'ghi'
          }
        ]
      });
      const nextState = updateBook(state, Map({
        ISBN: '10',
        title: 'Yo',
        startDate: 'now',
        endDate: 'later',
        state: 'reading',
        uuid: 'def'
      }));

      const nextBooks = nextState.getIn(['books']);
      expect(nextBooks.count()).toBe(3);

      const nextBook = nextBooks.get(1);
      expect(nextBook.get('ISBN')).toBe('10');
      expect(nextBook.get('title')).toBe('Yo');
      expect(nextBook.get('startDate')).toBe('now');
      expect(nextBook.get('endDate')).toBe('later');
      expect(nextBook.get('state')).toBe('reading');
      expect(nextBook.get('uuid')).toBe('def');
    });

    it('updates a book\'s extra data', () => {
      const state = fromJS({
        books: [
          {
            ISBN: '123',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'abc'
          },
          {
            ISBN: '456',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'def'
          },
          {
            ISBN: '789',
            title: 'Je suis Pilgrim',
            startDate: '2016',
            endDate: '2016-04-17',
            state: 'read',
            uuid: 'ghi'
          }
        ]
      });
      const nextState = updateBook(state, fromJS({
        ISBN: '789',
        title: 'Je suis Pilgrim',
        startDate: '2016',
        endDate: '2016-04-17',
        state: 'read',
        extra: {
          coverUrl: 'http://books.google.co.uk/books/content?id=j6uuCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          coverColour: '#98BBB5'
        },
        uuid: 'ghi'
      }));

      const nextBooks = nextState.getIn(['books']);
      expect(nextBooks.count()).toBe(3);

      const nextBook = nextBooks.get(2);
      expect(nextBook.get('uuid')).toBe('ghi');
      expect(nextBook.get('ISBN')).toBe('789');
      expect(nextBook.get('extra')).toBeDefined();
      const extra = nextBook.get('extra');
      expect(extra.get('coverUrl')).toBe('http://books.google.co.uk/books/content?id=j6uuCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api');
      expect(extra.get('coverColour')).toBe('#98BBB5');
    });
  });

  describe('removeBook', () => {
    it('removes a book from a single-book collection', () => {
      const book = Map({
        ISBN: 'abc',
        title: 'def',
        uuid: 123
      });
      const state = fromJS({
        books: [ book ]
      });
      const nextState = removeBook(state, book);

      const nextBooks = nextState.getIn(['books']);
      expect(nextBooks.count()).toBe(0);
    });

    it('removes a book from a multi-books collection', () => {
      const book = Map({
        ISBN: 'abc',
        title: 'def',
        uuid: 123
      });
      const state = fromJS({
        books: [
          {
            uuid: 789
          },
          book,
          {
            uuid: 456
          }
        ]
      });
      const nextState = removeBook(state, book);

      const nextBooks = nextState.getIn(['books']);
      expect(nextBooks.count()).toBe(2);

      expect(nextBooks.getIn(['0', 'uuid'])).toBe(789);
      expect(nextBooks.getIn(['1', 'uuid'])).toBe(456);
    });

    it('doesn\'t chnage an empty collection', () => {
      const book = Map({
        ISBN: 'abc',
        title: 'def',
        uuid: 123
      });
      const state = fromJS({
        books: []
      });
      const nextState = removeBook(state, book);

      expect(nextState).toBe(state);
    });
  });
});
