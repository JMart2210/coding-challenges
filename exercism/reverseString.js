// https://exercism.org/tracks/javascript/exercises/reverse-string
// Reverse a string

// For example: input: "cool" output: "looc"
const reverseString = (str) => {
  return str.split('').reverse().join("");
};
module.exports = reverseString;