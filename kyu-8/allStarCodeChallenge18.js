// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1
function strCount(str, letter){
    let count = 0;
    for (ltr of str){
        if (ltr === letter) count++
    }
    return count;
}
console.log(strCount("Hello", 'o')); // returns 1
console.log(strCount("Helllo lila", 'l')); // returns 2
// str_count("", 'z'); // returns 0

// This is how I would have solved if I converted to array
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
 }
// Clever use of split method
function strCount(str, letter){  
    return str.split(letter).length-1
}