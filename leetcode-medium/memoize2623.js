// https://leetcode.com/problems/memoize/
// Write a function that accepts another function as input and returns a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will returned a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
/**
 * @param {Function} fn
 */
function memoize(fn) {
    let breadcrumbs = {}
    return function(...args) {
      return breadcrumbs[args] !== undefined ? breadcrumbs[args] : breadcrumbs[args] = fn(...args);
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
 callCount += 1;
  return a + b;
})
console.log( memoizedFn(2, 3), 5) // 5
console.log( memoizedFn(2, 3), 5) // 5
console.log( memoizedFn(0, 0), 0) // 5
console.log( memoizedFn(0, 0), 0) // 5
console.log(callCount) // 2 