// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers){
    return numbers.map((x) => x*x).reduce((acc, c) => acc + c, 0)
}

console.log(squareSum([1, 2, 2])); // it should return 9 

// below solution puts the doubling inside of the reduce method:
function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }