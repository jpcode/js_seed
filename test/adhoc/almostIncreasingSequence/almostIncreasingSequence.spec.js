'use strict';
var assert = require('assert');
var almostIncreasingSequence = require('../../../src/adhoc/almostIncreasingSequence').almostIncreasingSequence;
describe('Adhoc', function() {
  describe('almostIncreasingSequence()', function() {
    it('should return false for a = [1, 3, 2, 1]', function() {
      assert.equal( false, almostIncreasingSequence( [1, 3, 2, 1] ) );
    });

    it('should return true for a = [1, 3, 2 ]', function() {
      assert.equal( true, almostIncreasingSequence( [1, 3, 2 ] ) );
    });

    it('should return true for a = [1, 2, 3, 4, 3, 6]', function() {
      assert.equal( true, almostIncreasingSequence( [1, 2, 3, 4, 3, 6] ) );
    });
  });
});
