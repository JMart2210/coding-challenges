// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// I first tried to solve it like this, but it didn't pass the 4th or 5th test case I added
// var isValid = function(s) {
//   for (let i = 0; i < s.length; i++){
//     if ( (s[i] === '(' && s[i+1] !== ')' ) ||
//       ( s[i] === '[' && s[i+1] !== ']' ) ||
//       ( s[i] === '{' && s[i+1] !== '}' )
//     ) return false;
//   }
//   return true;
// };

var isValid = function(s) {
  const map = {
    "(" : ")",
    "[" : "]",
    "{" : "}"
  }
  let test = [];
  for (let i = 0; i < s.length; i++) {
    // I had this line at first
    // if (s[i] === "(" || s[i] === "[" || s[i] === "{") test.push(s[i]);
    if (map[s[i]]) test.push(s[i]);
    else if(map[test.pop()] !== s[i]) return false;
  }
  return test.length === 0;
};

console.log(isValid('()'), true)
console.log(isValid('()[]{}'), true)
console.log(isValid('(])'), false)
console.log(isValid('{[]}'), true)
console.log(isValid('['), false)
console.log(isValid(']'), false)
