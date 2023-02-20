// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
    string = string.toLowerCase().split('');
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    return (alphabet.split('').filter((ltr) => !string.includes(ltr)).length === 0) ? true : false;
  }
  

// This one used every and indexOf. Not quite sure about the logic at the end, but works if you play with it. 
  function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
  }
  console.log(isPangram("The quick brown fox jumps over the lazy dog."));
  console.log(isPangram("This is not a pangram."));