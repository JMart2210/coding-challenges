// https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript
// You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
// Here are the following valid operators :
// + Addition
// - Subtraction
// * Multiplication
// // Integer Division
// Your Work (Task)
// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
function dotCalculator (equation) {
  let copy = equation.split(" ");
  let first = copy[0].length;
  let operator = copy[1];
  let second = copy[2].length;
  switch (operator){
    case ('+'):
      copy = first + second;
      break;
    case ('-'):
      copy = first - second;
      break;
    case ('*'):
      copy = first * second;
      break;
    case ('//'):
      copy = first / second;
      break;
  }
  return '.'.repeat(copy);
}

console.log(dotCalculator("..... - ."), "....");
console.log(dotCalculator("..... * ..."), "...............");

//I like the use of destructured array.
const dotCalculator = (equation) => {
  const operations = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [left, operator, right] = equation.split(' ');
  return '.'.repeat(operations[operator](left.length, right.length));
}

//723