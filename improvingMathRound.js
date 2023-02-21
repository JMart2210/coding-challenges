// Improving Math.round(x)
// Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:
// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
// You may find the following Math methods useful:
// Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
Math.roundTo = function (number, precision) {
   return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision)
}
console.log(Math.roundTo(9.9999, 3));

//This solution utilized the toFixed method. I wasn't aware of it, just solved using the clues provided.
Math.roundTo = (number, precision) => Number(number.toFixed(precision));