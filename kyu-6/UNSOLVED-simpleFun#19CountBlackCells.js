// https://www.codewars.com/kata/588475d575431d0a0e000023/train/javascript
// Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:
//  A cell is painted black if it has at least one point in common with the diagonal;
// Otherwise, a cell is painted white.
// Count the number of cells painted black.
// Example
// For n = 3 and m = 4, the output should be 6
// There are 6 cells that have at least one common point with the diagonal and therefore are painted black.
// For n = 3 and m = 3, the output should be 7
// 7 cells have at least one common point with the diagonal and are painted black.
// Input/Output
// [input] integer n
// The number of rows.
// Constraints: 1 ≤ n ≤ 10000.
// [input] integer m
// The number of columns.
// Constraints: 1 ≤ m ≤ 10000.
// [output] an integer
// The number of black cells.

// I'm thinking I've got to determine the line intersection point for each block. n/m gives you the slope of the line. So for the n=3 m=4 example, the vertical change each block is equal to 3/4 (or 0.75). The intersections increment becoming (0 : 0) (1 : .75) (2 : 1.5) (3 : 2.25) (4 : 3).
// Whatever solution I come up with the top left cube, and bottom right cube
// 
function countBlackCells(n, m) {
  // declare a result variable to track blocks painted (initial value may need to account for starting and ending block)
  let result = 0;
  // initialize a pt to keep track of intersection
  let ptL = 0;
  let ptR = 0;
  // loop from 0 up to m, which represents every column change
  for (let i = 1; i <= m; i++){
    ptL = Math.floor(ptR); // set ptL to ptR from last loop
    ptR += n/m; // update ptR with new intersection
    
    let pt = ptR.toFixed(5)
    console.log(pt)
    // at each column intersection, determine how many blocks were painted in the column it just went through
    // it will always be at least 1. 

    // This adds the vertical box changes to the result
    if (Math.floor(ptR) > ptL) {
      result += Math.floor(ptR) - ptL
    }
    // every column change is going to paint at least 1 square
    result += 1;

    console.log(`Column ${i}: (${ptL},${ptR}). Result:${result}`)
    // add that to result variable
  }
  return result -1;
  //return result 
}
// console.log( countBlackCells(1,20) , 20)
console.log( countBlackCells(2,20) , )
// console.log( countBlackCells(3,4) , 6)
//  console.log( countBlackCells(3,3) , 7)
// console.log( countBlackCells(4,3) , 6)
// console.log(countBlackCells(1,239) , 239)
// console.log(countBlackCells(16,8) , 30)
// console.log( countBlackCells(6666,8888) , 17774)