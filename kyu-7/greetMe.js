// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
var greet = function(name) {
    name = name.toLowerCase().split('')
    name[0] = name[0].toUpperCase()
    return `Hello ${name.join('')}!`
};

console.log(greet("riley")); // --> "Hello Riley!"
console.log(greet("JACK")); //  --> "Hello Jack!"

// I didn't need to convert to array before making changes. A few solutions below:
var greet = function(name) {
    return `Hello ${name.slice(0,1).toUpperCase()}${name.slice(1).toLowerCase()}!`;
};
var greet = function(name) {
    return 'Hello ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!';
};