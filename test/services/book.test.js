import { Map } from 'immutable';
import { newBook } from '../../src/services/book';

describe('Book service', () => {
  describe('newBook', () => {
    it('returns a immutable map', () => {
      const result = newBook();

      expect(result).toBeInstanceOf(Map);
    });

    it('returns a book with a default status', () => {
      const result = newBook();

      expect(result.get('state')).toBe('stock');
    });

    it('enable status override', () => {
      const result = newBook('loool');

      expect(result.get('state')).toBe('loool');
    });
  });
});
