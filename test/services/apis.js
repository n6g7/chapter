import {Map} from 'immutable';
import {expect} from 'chai';

import {getBookData, getMainColour} from '../../src/services/apis';

describe('APIs service', () => {
  describe('getBookData', () => {
    const book = Map({
      ISBN: '9780787960759'
    });

    it('returns a promise', () => {
      const result = getBookData(book);

      expect(result).to.be.an.instanceof(Promise);
    });

    it('returns volumeInfo data', () => {
      const result = getBookData(book);

      expect(result).to.eventually.have.property('title');
    });
  });

  describe('getMainColour', () => {
    const url = 'http://chaijs.com/img/chai-logo-small.png';

    it('returns a promise', () => {
      const result = getMainColour(url);

      expect(result).to.be.an.instanceof(Promise);
    });

    it('returns a hex colour string', () => {
      const result = getMainColour(url);

      expect(result).to.eventually.match(/^#[0-9a-z]{6}$/);
    });
  });
});
