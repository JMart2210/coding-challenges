// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript
// When provided with a String, capitalize all vowels
// Note: Y is not a vowel in this kata.
function swap (string) {
    let vowels = 'aeiou'
    let res = ''
    const isVowel = x => vowels.includes(x);
    for (ltr in string){
        res += isVowel(string[ltr]) ? string[ltr].toUpperCase() : string[ltr];
    }
    return res;
}
console.log(swap("Hello World!")) // "HEllO WOrld!"

// It always seems to be better to convert to array and use those methods
const vowels = ["a", "e", "i", "o", "u"];
const swap = s => s.split('').map(x => vowels.includes(x) ? x.toUpperCase() : x).join('');
// 487
