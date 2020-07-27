'use strict';

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvensES6 = ( numbers) => ( numbers.map( num => num ** 2 ).filter( square => square % 2 === 0 ));

const arr = [ 1,2,3,4,5];
console.log( '...squareAndFindEvens:', squareAndFindEvens(arr));
console.log( 'squareAndFindEvensES6:',squareAndFindEvensES6(arr));
