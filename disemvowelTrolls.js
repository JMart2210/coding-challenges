// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    const vowels = ['a','A','e','E','i','I','o','O','u','U'];
    for (let i = str.length; i >= 0; i--) {
        if (vowels.includes(str[i])) str = str.substring(0, i) + str.substring(i+1)
    }
    return str;
}
console.log(disemvowel('This website is for losers LOL!'));
console.log(disemvowel("What are you, a communist?"));

// Good solution using filter method.
const vowels = 'aeiou';
function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}