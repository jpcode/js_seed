'use strict';
var assert = require('assert');
var sum = require('../../../src/adhoc/sum').sum;
describe('Adhoc', function() {
  describe('sum()', function() {
    it('should return 12 as sum of 8 and 4', function() {
      assert.equal(12, sum( 8, 4 ) );
    });
  });
});
