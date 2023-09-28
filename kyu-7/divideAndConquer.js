// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.
function divCon(x){
  return x.reduce( (acc, curr) => typeof(curr) === 'string' ? acc - curr: acc + curr, 0)
}

console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13)