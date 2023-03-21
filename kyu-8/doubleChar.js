// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// function doubleChar(str) {
//     let result = ''
//     for (ltr of str) {
//         result += ltr + ltr;
//     }
//     return result;
// }

const doubleChar = str => str.split('').map( ltr => ltr+ltr).join('')

console.log(doubleChar( "String" ), 'SSttrriinngg'); 
console.log(doubleChar("Hello World"), "HHeelllloo  WWoorrlldd");
console.log(doubleChar("1234!_ "), "11223344!!__  ");

//583