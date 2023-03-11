// https://www.codewars.com/kata/5862fb364f7ab46270000078/train/javascript
// The most basic encryption method is to map a char to another char by a certain math rule. Because every char has an ASCII value, we can manipulate this value with a simple math expression. For example 'a' + 1 would give us 'b', because 'a' value is 97 and 'b' value is 98.
// You will need to write a method which does exactly that -
// get a string as text and an int as the rule of manipulation, and should return encrypted text. for example:
// encrypt("a",1) = "b"
// Full ascii table is used on our question (256 chars) - so 0-255 are the valid values.
// If the value exceeds 255, it should 'wrap'. ie. if the value is 345 it should wrap to 89.
function encrypt(text, rule) {
    return text.split('')
    .map( ltr => {
        let code = ltr.charCodeAt(0) + rule 
        while (code >= 256) code -= 256;
        return String.fromCharCode(code);
    }).join('');
};
console.log(encrypt("b", 1));

// Another solution that uses the modulus logic to loop back over something.
function encrypt(text, rule) {
    return text.split('').map(a => String.fromCharCode((a.charCodeAt(0) + rule) % 256)).join('');
  };
  // 511