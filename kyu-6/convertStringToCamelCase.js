// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
function toCamelCase(str){
    let temp = str.split('-').map( (word, i) => i === 0 ? word : word.slice(0,1).toUpperCase() + word.substring(1)).join('')
    temp = temp.split('_').map( (word, i) => i === 0 ? word : word.slice(0,1).toUpperCase() + word.substring(1)).join('');
    return temp;
}

console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase( "The_Stealth_Warrior")); // "TheStealthWarrior"
console.log(toCamelCase( "The_Stealth-Warrior")); // "TheStealthWarrior"

//all the posted solutions seemed to use Regex which I'm avoiding or seemed complicated.
// 495