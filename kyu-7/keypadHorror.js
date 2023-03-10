// https://www.codewars.com/kata/5572392fee5b0180480001ae/train/javascript
// Having two standards for a keypad layout is inconvenient!
// Computer keypad's layout:
// 7 8 9  \n
// 4 5 6  \n
// 1 2 3  \n
//   0 \n
// Cell phone keypad's layout:
// 1 2 3\n 
// 4 5 6\n  
// 7 8 9\n  
//   0\n
// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.
// You get a string with numbers only
function computerToPhone(numbers){
    return numbers.split('').map( n => {
        if (n === '1') return '7';
        if (n === '2') return '8';
        if (n === '3') return '9';
        if (n === '7') return '1';
        if (n === '8') return '2';
        if (n === '9') return '3';
        return n;
    }).join('');
}
console.log(computerToPhone("789")) // -> "123"

// Clever use of index of string matching up with alternate keyboard
function computerToPhone(numbers) {
    return numbers.split('').map(function(d) {return "0789456123"[d]; }).join('');
}
//485