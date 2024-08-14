// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut (string) {
    const vowels = ['a','e','i','o','u'];
    return string.split('').map( str => vowels.includes(str) ? '' : str).join('');
  }

 console.log(shortcut("hello") == "hll"); // TRUE
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"