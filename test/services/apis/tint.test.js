import tint, { TINT_API } from '../../../src/services/apis/tint';

jest.mock('../../../src/services/apis/client', () => {
  const successfulResponse = () => Promise.resolve({
    colours: [
      {
        counts: 16039,
        rgb: '252,252,251',
        hex: 'FCFCFB',
        percentage: 0.7641,
        percent: '76.41%'
      },
      {
        counts: 2502,
        rgb: '184,170,162',
        hex: 'B8AAA2',
        percentage: 0.1192,
        percent: '11.92%'
      },
      {
        counts: 2451,
        rgb: '132,87,81',
        hex: '845751',
        percentage: 0.1168,
        percent: '11.68%'
      }
    ]
  });

  return {
    post: jest.fn(successfulResponse)
  };
});

const client = require('../../../src/services/apis/client');

describe('Tint API', () => {
  describe('getMainColour', () => {
    const imageUrl = 'http://chaijs.com/img/chai-logo-small.png';

    it('returns a promise', () => {
      const result = tint.getMainColour(imageUrl);
      expect(result).toBeInstanceOf(Promise);
    });

    it('calls HttpClient.post()', () => {
      tint.getMainColour(imageUrl);
      expect(client.post).toHaveBeenCalledWith(TINT_API, {
        url: imageUrl
      })
    });

    it('returns a hex colour string', () => {
      return tint.getMainColour(imageUrl)
      .then(res => {
        expect(res).toMatch(/^#[0-9a-fA-F]{6}$/);
      });
    });

    it('returns the first colour that is not too white', () => {
      return tint.getMainColour(imageUrl)
      .then(res => {
        expect(res).toBe('#B8AAA2');
      });
    });

  });
});
