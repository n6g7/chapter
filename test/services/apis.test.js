import { Map } from 'immutable';

import { getBookData, getMainColour } from '../../src/services/apis';

describe('APIs service', () => {
  describe('getBookData', () => {
    const book = Map({
      ISBN: '9780787960759'
    });

    it('returns a promise', () => {
      const result = getBookData(book);

      expect(result).toBeInstanceOf(Promise);
    });

    it('returns volumeInfo data', () => {
      return getBookData(book).then(res => {
        expect(res.title).toBeDefined();
      });
    });
  });

  describe('getMainColour', () => {
    const url = 'http://chaijs.com/img/chai-logo-small.png';

    it('returns a promise', () => {
      const result = getMainColour(url);

      expect(result).toBeInstanceOf(Promise);
    });

    it('returns a hex colour string', () => {
      return getMainColour(url).then(res => {
        expect(res).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });
  });
});
