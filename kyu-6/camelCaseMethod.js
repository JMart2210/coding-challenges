// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript
// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
String.prototype.camelCase=function(){
    temp = this.split(' ');
    if (temp[0].length === 0) return '';
    return temp.map( (word) => word[0].toUpperCase() + word.substring(1)).join('')
}

console.log("hello case".camelCase()) //=> HelloCase
console.log("".camelCase()) // => CamelCaseWord

// I could have used a slice method or a charAt method to handle the undefined error from just using index (word[0]) above.
String.prototype.camelCase=function(){
    return this.split(' ').map(w => w.slice(0, 1).toUpperCase() + w.slice(1)).join('');
  }