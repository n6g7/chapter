import { fromJS } from 'immutable';
import moment from 'moment';
import transformer from '../../../src/services/transformers/book';

describe('Book transformer', () => {
  const bookData = {
    author: 'me',
    cover: {
      colour: '#112233',
      image: 'https://example.com/image.png'
    },
    ISBN: '1234567890123',
    progress: 2,
    state: 'read',
    title: 'Yo'
  };

  describe('serialize', () => {

    it('maps simple values', () => {
      const result = transformer.serialize(fromJS(bookData));
      expect(result).toEqual(bookData);
    });

    it('stringifies dates', () => {
      const result = transformer.serialize(fromJS({
        ...bookData,
        startDate: moment(),
        endDate: moment()
      }));

      const dateRegex = /^[a-z]{3} [a-z]{3} \d{2} \d{4} \d{2}:\d{2}:\d{2} [a-z]{3}\+\d{4}$/i
      expect(result.startDate).toBeDefined();
      expect(result.startDate).toMatch(dateRegex);
      expect(result.endDate).toBeDefined();
      expect(result.endDate).toMatch(dateRegex);
    })

  });

  describe('serializeList', () => {

    it('serializes a list of books', () => {
      const result = transformer.serializeList(fromJS([
        bookData,
        bookData
      ]));
      expect(result).toEqual([
        bookData,
        bookData
      ]);
    });

  });

  describe('parse', () => {

    it('parses a book', () => {
      const result = transformer.parse('abc', bookData);
      expect(result).toEqual(fromJS({
        ...bookData,
        bid: 'abc',
        endDate: null,
        startDate: null,
      }));
    });

    it('parses dates', () => {
      const result = transformer.parse('abc', {
        ...bookData,
        startDate: '2017-02-05',
        endDate: '2017-02-06',
      });

      expect(result).toEqual(fromJS({
        ...bookData,
        bid: 'abc',
        endDate: moment('2017-02-06'),
        startDate: moment('2017-02-05'),
      }));
    });

  });

  describe('parseList', () => {

    it('parses a list of book', () => {
      const result = transformer.parseList({
        abc: bookData,
        def: bookData,
      });
      expect(result).toEqual(fromJS([
        {
          ...bookData,
          bid: 'def',
          endDate: null,
          startDate: null,
        },
        {
          ...bookData,
          bid: 'abc',
          endDate: null,
          startDate: null,
        }
      ]));
    });

    it('sorts the book by startDate', () => {
      const result = transformer.parseList({
        abc: {
          ...bookData,
          startDate: '2017-02-01',
        },
        def: {
          ...bookData,
          startDate: '2017-01-01',
        },
      });

      expect(result).toEqual(fromJS([
        {
          ...bookData,
          bid: 'def',
          endDate: null,
          startDate: moment('2017-01-01'),
        },
        {
          ...bookData,
          bid: 'abc',
          endDate: null,
          startDate: moment('2017-02-01'),
        }
      ]));
    });

  });
});
