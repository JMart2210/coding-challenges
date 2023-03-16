// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
    for (let i = string.length; i > 0; i--) {
        if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
            string = `${string.substring(0, i)} ${string.substring(i)}`
        }
    }
    return string;
}
console.log(solution("camelCasing")) //  =>  "camel Casing"
console.log(solution("identifier")) //  =>  "identifier"
console.log(solution("")) //  =>  ""

// I thought about converting to array and mapping it. Conditional using toUpperCase method is easier.
function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }