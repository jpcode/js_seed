(function (exports) {
  'use strict';
  /**
   * Method Given a sequence of integers as an array, 
   * determine whether it is possible to obtain a 
   * strictly increasing sequence by removing no more than 
   * one element from the array.
   * @module adhoc/almostIncreasingSequence
   * @param {a} Array - Array of integer numbers.
   * @returns {Boolean} return if is possible obtain a strictly increasing sequence
   *
   * @example
   * var almostIncreasingSequence = require('your_path/src/almostIncreasingSequence').almostIncreasingSequence;
   *
   * console.log(almostIncreasingSequence( [1, 3, 2, 1] )); // false
   */
  exports.almostIncreasingSequence = function ( a ) {
     /*
       Let's analyze:
       [ 1, 3, 2 , 1 ]
       let's check when the array has two elements that break the increase sequence.
       1 - 3 > Increase ok
       3 - 2 > decrease + 1
       2 - 1 > decrease + 1
       
       In this case: We can think that to solve this question just we need to count 
       decrease pair of elements:

          if decrease_pairs > 1 
              return false; 
          else return true
        
      Ok, this works! but there are some corner cases like :
      [1, 2, 3, 4, 3, 6]

      If we run the decrease_pairs algorithm we can obtain:
      1 - 2 : decrease : 0
      2 - 3 : decrease : 0
      3 - 4 : decrease : 0
      4 - 3 : decrease : 1 , 3 < 4
      3 - 6 : decrease:  1.

      decrease_pairs = 1, so algoritms return true, but that is not CORRECT!

      So, at this point we need to check what element need to be deleted to obtain an
      increasing sequenece.

      Ok that occurs when count = 1.
      [1, 2, 3, 4, 3, 6]  -> 4 && 3 are the elements in conflict.
      So we need to check if we can eliminate 3 or 4, if the answer is true -> return true
      else return false.

      So for this purpose we need to compare:

      previous of previous < current || previus < after

      Where current = is the position where ocurrs a decrease sequence.

     */
     var count = 0, p;
      for ( var i = 1; i < a.length; i++ ){
          if ( a[ i ] <= a[ i - 1 ] ){
              count++;
              p = i;    
          }
      }
      if ( count >= 2 ) return false;
      if ( count == 0 ) return true;
      if ( p == a.length - 1 ) return true;
      if ( p == 1 ) return true;
      
      //1 
      var current = a[ p ];
      var ant = a[ p - 1 ];
      var sig = a[ p + 1 ];
      var antant = a[ p - 2 ];
      
      return antant < current || ant < sig;   
  };

}(typeof exports === 'undefined' ? window : exports));
