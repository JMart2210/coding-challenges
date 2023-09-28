// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2){
    let result = 0;
    if (operation == '+') result = value1 + value2;
    if (operation == '-') result = value1 - value2;
    if (operation == '*') result = value1 * value2;
    if (operation == '/') result = value1 / value2;
    return result;
}
// Examples(Operator, value1, value2) --> output
console.log(basicOp('+', 4, 7), '11')
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7 

// This solution set up a variable "cases" which is an object, that uses the operations as the keys, and the values are calculated based on the operation key. Then it simply returns the value associated with that key.
function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}