import {Map} from 'immutable';
import {expect} from 'chai';

import { newBook } from '../../src/services/book';

describe('Book service', () => {
  describe('newBook', () => {
    it('returns a immutable map', () => {
      const result = newBook();

      expect(result).to.be.an.instanceof(Map);
    });

    it('returns a book with a default status', () => {
      const result = newBook();

      expect(result).to.have.property('state', 'stock');
    });

    it('enable status override', () => {
      const result = newBook('loool');

      expect(result).to.have.property('state', 'loool');
    });
  });
});
