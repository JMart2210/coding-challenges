// https://www.codewars.com/kata/5825792ada030e9601000782
// zipWith ( or zip_with ) takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
// The function value is one new array.
// If the arrays are of unequal length, the output will only be as long as the shorter one.
// (Values of the longer array are simply not used.)
// Inputs should not be modified.
function zipWith(fn,a0,a1) {
  let min = Math.min(a0.length, a1.length);
  let result = []
  for (let i = 0; i < min; i++){
    result.push(fn(a0[i], a1[i]))
  }
  return result;
}
console.log(zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )) //      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both forms are valid
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  // Both are functions

// This solution created a reference to the smaller array and then
// was able to use the map method on that to return an array
function zipWith(f,A=[],B=[]) {
  var smaller = B.length > A.length ? A : B
  return smaller.map( (v,i,RA)=> f(A[i],B[i]) )
}

// 535 - 543