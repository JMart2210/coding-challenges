// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    let sorted = []
    arr.reverse().forEach( x => {
        return x === 0 ? sorted.push(x) : sorted.unshift(x);
    })
    return sorted;
}

// A few different way people solved this one:
// The true return of -1 sorts the items down the list, and returning 0 for the other items just keeps them where they are at.
function moveZeros(arr) {
    return arr.sort((a, b) => b === 0 ? -1 : 0);
  }
// This solution uses two different filter methods on the array and combines them using the spread operator on the returned array.
var moveZeros = function (arr) {
    return [
      ...(arr.filter(n => n !== 0)),
      ...(arr.filter(n => n === 0))
    ];
}
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]