// https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript
// Is every value in the array an array?
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
const arrCheck = value => 
  value.filter( item => 
    !Array.isArray(item))
    .length === 0 ? true : false;

console.log(arrCheck([[]]), 'true') 
console.log(arrCheck( ['1','2']), 'false')
console.log(arrCheck( [{1:1},{2:2}] ), 'false')

// Optimal solution
const arrCheck = value => value.every( Array.isArray )

//691