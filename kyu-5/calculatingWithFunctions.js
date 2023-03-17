// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// This time we want to write calculations using functions and get the results. 
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

const zero = (x) => x? x(0): 0;
const one = (x) => x? x(1): 1;
const two = (x) => x ? x(2) : 2;
const three = (x) => x ? x(3) : 3;
const four = (x) => x ? x(4) : 4;
const five = (x) => x ? x(5) : 5;
const six = (x) => x ? x(6) : 6;
const seven = (x) => x ? x(7) : 7;
const eight = (x) => x ? x(8) : 8;
const nine = (x) => x ? x(9) : 9;

const plus = (n) => (x) => x + n;
const minus = (n) => (x) => x - n;
const times = (n) => (x) => x * n;
const dividedBy = (n) => (x) => Number.parseInt(x / n);

console.log(seven(times(five()))); // must return 35
console.log(nine(plus(four()))); // must return 13
console.log(eight(dividedBy(three()))); // must return 2, not 2.666

// Many of the solutions looked similar to mine. This one used destructuring and
// map method to create the functions;
const [zero, one, two, three, four, five, six, seven, eight, nine] = [...Array(10)].map((_, idx) => fn => fn ? fn(idx) : idx);
const [plus, minus, times, dividedBy] = [`+`, `-`, `*`, `/`].map(val => new Function(`b`, `return a => a ${val} b ^ 0`));

// 573