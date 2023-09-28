// https://www.codewars.com/kata/514b92a657cdc65150000006
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
// number -> positive or negative; negative return 0; integer 
// function solution(num){
//     let total = 0;
//     console.log([...Array(num).keys()])
//     for (let i = 3; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0){
//             total += i;
//         }
//     }
//     return total;
// }
function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
  }
console.log(solution( 16), '60') //  (3, 5, 6, 9, 10, 12, 15) -> return 60
console.log(solution( -5), '0') //  -> return 0 
console.log(solution(  2), '0') //  -> return 0 
console.log(solution(  4), '3') //  -> (3) -> return 3