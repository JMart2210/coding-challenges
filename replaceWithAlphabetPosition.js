// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
function alphabetPosition(text) {
  let isChar = char => char.toLowerCase() != char.toUpperCase()
  text = text.toUpperCase().split('').filter( (char) => isChar(char));
  let result = text.map((char) => `${char}`.charCodeAt(0)-64).join(' ');
  return result;
}
// I consolidated a few things when I submitted the solution:
function alphabetPosition(text) {
  text = text.toUpperCase().split('').filter( (char) => char.toLowerCase() != char.toUpperCase());
  return text.map((char) => `${char}`.charCodeAt(0)-64).join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// I liked this solution. It created an array of the alphabet and then just used the index of the letter (+1) to figure out what number should be included in the returned string.
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text.toLowerCase().split('')
  .filter( letter => {
    let index = alphabet.indexOf(letter);
    return index > -1;
  }  )
  .map( letter => alphabet.indexOf(letter) + 1 )
  .join(' ')
}