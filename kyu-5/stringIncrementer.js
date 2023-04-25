// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Attention: If the number has leading zeros the amount of digits should be considered.
function incrementString (strng) {
    let str = strng.split('');
    let num = [];
    let i = str.length - 1;
    while (i >= 0 && !isNaN(str[i])) {
        num.unshift(str[i]);
        i--;
    }
    num = num.join('');
    if (num.length === 0) {
        str.push('1');
    } else {
        let numLen = num.length;
        let numInt = parseInt(num) + 1;
        let numIntLen = numInt.toString().length;
        if (numIntLen > numLen) {
            str.splice(-numLen, numLen, numInt);
        } else {
            str.splice(-numLen, numLen, numInt.toString().padStart(numLen, '0'));
        }
    }
    return str.join('');
  }