'use strict';

function double( arr ){
  return arr.map( function(val) {
    return val * 2;
  });
};

const doubleES6 =  ( arr  => arr.map( val => val * 2));


const arr = [ 1,2,3,4,5];
console.log( '...double:', double(arr));
console.log( 'doubleES6:', doubleES6( arr ) );

/*
 OUTPUT:

 /usr/bin/node /home/acampos/my/courses/spb/unit-10/03/code/unit-10-03-exercise/part-1.js
 ...double: [ 2, 4, 6, 8, 10 ]
 doubleES6: [ 2, 4, 6, 8, 10 ]

 */
