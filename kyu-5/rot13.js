// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){
    return message.split('')
    .map( ltr => {
        const code = ltr.charCodeAt();
        if ( code < 65 || code > 122 || (code > 90 && code < 97) ) return ltr;
        if ( code <= 90 ) {
            return code + 13 > 90 ? String.fromCharCode(code + 13 - 26) : String.fromCharCode(code + 13);
        } else {
            return code + 13 > 122 ? String.fromCharCode(code + 13 - 26) : String.fromCharCode(code + 13);  
        } 
    }).join('')    
}

console.log(rot13('test')); //grfg
console.log(rot13("Test")) // Grfg

// a = 97
// z = 122
// A = 65
// Z = 90

// 573 - 581