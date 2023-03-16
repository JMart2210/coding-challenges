// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
    num = num.toString();
    let count = 0;
    while (num.length > 1) {
        count++;
        num = num.split('').reduce((accum, curr) => accum * curr).toString();
    }
    return count;
}
console.log(persistence(4)); // --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// Two different clever solutions:
// This one used template literals to get around all the 'toString()' methods that were needed, and recursively called the function
// and just incremented the count by adding 1 with each deeper function call. The last function call was 0, and it just incremented by
// 1 as it worked back down the call stack.
const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }
// This one loops through by checking if the num is > 9 (i.e. more than 1 digit)
function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
}