// https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript
// In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
// The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them
function parseInt(string) {
    string = string.replaceAll('-', ' ').split(' ');
    console.log(string);
    result = 0;
    let gResult = 0;
    let mResult = 0;
    for (let i = 0; i < string.length; i++){
        switch (string[i]) {
            case ('one'):
                result += 1
                break;
            case ('two'):
                result += 2
                break;
            case ('three'):
                result += 3
                break;
            case ('four'):
                result += 4
                break;
            case ('five'):
                result += 5
                break;
            case ('six'):
                result += 6
                break;
            case ('seven'):
                result += 7
                break;
            case ('eight'):
                result += 8
                break;
            case ('nine'):
                result += 9
                break;
            case ('ten'):
                result += 10
                break;
            case ('eleven'):
                result += 11
                break;
            case ('twelve'):
                result += 12
                break;
            case ('thirteen'):
                result += 13
                break;
            case ('fourteen'):
                result += 14
                break;
            case ('fifteen'):
                result += 15
                break;
            case ('sixteen'):
                result += 16
                break;
            case ('seventeen'):
                result += 17
                break;
            case ('eighteen'):
                result += 18
                break;
            case ('nineteen'):
                result += 19
                break;
            case ('twenty'):
                result += 20
                break;
            case ('thirty'):
                result += 30
                break;
            case ('forty'):
                result += 40
                break;
            case ('fifty'):
                result += 50
                break;
            case ('sixty'):
                result += 60
                break;
            case ('seventy'):
                result += 70
                break;
            case ('eighty'):
                result += 80
                break;
            case ('ninety'):
                result += 90
                break;
            case ('hundred'):
                result *= 100
                break;
            case ('thousand'):
                gResult = result * 1000
                result = 0;
                break;
            case ('million'):
                mResult = result * 1000000
                result = 0;
            break;
            }
    }
    return mResult + gResult + result;
}
// This solution had a clever use of modulus to do the math. My favorite solution was at the bottom which used
// similar logic to mine, but used an object as a conversion table instead of building out so many
// switch statements.  
var words = {
    "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
    "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
    "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
    "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
    return str.split(/ |-/).reduce(function(value, word) {
        console.log(words[word])
        if (words[word]) value += words[word];
        if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
        return value;
    },0);
}
// This was my favorite solution:
function parseInt(string) {
    const conversionTable = {
    "one" : 1, "two" : 2, "three" : 3, "four": 4, "five" : 5, "six" : 6, "seven" : 7,
    "eight" : 8, "nine" : 9, "ten": 10, "eleven" : 11, "twelve" : 12, "thirteen" : 13,
    "fourteen" : 14, "fifteen" : 15, "sixteen": 16, "seventeen" : 17, "eighteen" : 18,
    "nineteen" : 19, "twenty" : 20, "thirty" : 30, "forty" : 40, "fifty" : 50, "sixty" : 60,
    "seventy" : 70, "eighty" : 80, "ninety" : 90, "zero" : 0
    }
    let result = 0, tempNumber = 0;
    let regex = /(\sand\s|-)+/gi;
    string = string.replace(regex, " ").split(" ");
    
    for (let word of string) {
      word = word.toLowerCase();
      switch (word) {
          case "hundred":
            tempNumber *= 100;
            break;
          case "thousand":
            result += tempNumber * 1000;
            tempNumber = 0;
            break;
          case "million":
            tempNumber *= 1000000;
            break;
          default:
            tempNumber += conversionTable[word];
      }
    }
    result += tempNumber;
    return result;
  }
console.log(parseInt("twenty-six thousand three-hundred and fifty nine")) // => 26359
// console.log(parseInt("twenty")) //=> 20
// console.log(parseInt("two hundred forty-six")) // => 246
// console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen")) //=> 783919
// console.log(parseInt('one million')) // 