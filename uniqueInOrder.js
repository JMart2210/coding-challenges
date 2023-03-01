// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  iterable = (typeof(iterable) === 'object') ? iterable : iterable.split('');
  return iterable.filter((e, i) => e != iterable[i-1] )
}
console.log(uniqueInOrder('ABBCcAD'))       //== ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder('AAAABBBCCDAABBB')) //== ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder([1,2,2,3,3]))       //== [1,2,3]

// consolidated into one line
var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}