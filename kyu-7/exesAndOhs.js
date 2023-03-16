// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
  let result = {'x': 0, 'o': 0}
  for (ltr of str.toLowerCase()) {
    if (ltr === 'x') result.x++
    if (ltr === 'o') result.o++
  }
  return result.x === result.o;
}
// Thought it would be good practice to just map every letter to result object since that seems helpful
function XO(str) {
  let result = {'x': 0, 'o': 0}
  for (ltr of str.toLowerCase()) {
    result[ltr] ? result[ltr]++ : result[ltr] = 1;
  }
  return result.x === result.o;
}
console.log(XO("oohelloxX peopleXOzXx")) // => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false