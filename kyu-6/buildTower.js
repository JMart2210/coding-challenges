// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"    1  2  3  4  5   6
// ] Stars (6): 1, 3, 5, 7, 9, 11
//   spaces(6): 10, 8, 6, 4, 2, 0 
// And a tower with 6 floors looks like this:
// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]
function towerBuilder(n) {
    let blocks = '*'
    let result = [];
    const totalSpaces = n * 2 - 1;
    for (let i = 1; i <= n; i++) {
      let spaces = (totalSpaces - blocks.length )/2
      let temp = blocks.padStart(spaces + blocks.length).padEnd(totalSpaces);
      result.push(temp);
      blocks = '*'+blocks+'*';
    }
    return result;
  }

console.log(towerBuilder(6));
// Almost all of the other solutions utilized the repeat method. I didn't think about using that
function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }