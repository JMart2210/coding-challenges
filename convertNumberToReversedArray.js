// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    return `${n}`.split('').reverse().map((x) => Number(x));
}
console.log(digitize(35231)) // [1,3,2,5,3]
// I could have just passed Number to the map method since it is already a function, like so: 
// return String(n).split('').map(Number).reverse()

// This was clever using the .from method and just passing the Number function to convert the values.
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}
