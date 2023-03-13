// https://www.codewars.com/kata/55caf1fd8063ddfa8e000018
// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
// The result should be a string of numbers, separated by comma and space.
function arithmeticSequenceElements(a, d, n) {
  result = []; 
  for (let i = 0; i < n; i++){
    result.push(a+i*d)
  }
  return result.join(', ');
}
// Example
// # first element: 1, difference: 2, how many: 5
// arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"

//This solution used a while and just incremented the (n--) instead of doing a for loop.
function arithmeticSequenceElements(a,r,n) {
  var ret = [a]
  while (--n) ret.push(a+=r);
  return ret.join(', ')
}


// // 533 - 535