// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.
function invert(array) {
  const result = [];
  array.forEach( x => result.push(-x))
  return result;
}
console.log(invert([1,-2,3,4,5])) // == [-1,2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// Should have used map method
const invert = array => array.map(num => -num);

//543 - 545