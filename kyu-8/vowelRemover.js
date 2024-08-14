// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
    const vowels = ['a','e','i','o','u'];
    return string.split('').map( str => vowels.includes(str) ? '' : str).join('');
  }

console.log(shortcut("hello") == "hll"); // TRUE
console.log(shortcut("codewars") == "cdwrs"); // TRUE
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"