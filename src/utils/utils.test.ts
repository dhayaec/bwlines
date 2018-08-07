import { add, getType } from './utils';

describe('utils', () => {
  describe('add', () => {
    it('should add numbers', () => {
      expect(add(5, 6)).toEqual(11);
      expect(add(-1, 6)).toEqual(5);
    });
  });
  describe('getType', () => {
    it('should get type', () => {
      expect(getType(5)).toEqual('number');
      expect(getType('a')).toEqual('string');
      expect(getType([1, 2])).toEqual('array');
      expect(getType({})).toEqual('object');
    });
  });
});
