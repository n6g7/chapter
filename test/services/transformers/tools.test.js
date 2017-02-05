import { removeUndefinedValues } from '../../../src/services/transformers/tools';

describe('Transformers tools', () => {
  describe('removeUndefinedValues', () => {
    it('removes undefined values', () => {
      const result = removeUndefinedValues({
        a: 1,
        b: undefined,
        c: {
          d: undefined,
          e: '2'
        }
      });

      expect(result).toEqual({
        a: 1,
        c: {
          e: '2'
        },
      });
    })
  });
});
