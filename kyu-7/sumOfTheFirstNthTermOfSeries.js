// https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.
function SeriesSum(n){
    let total = 0;
    for (let i = 0; i < n; i++){
        total += 1/((i*3)+1)
    }
    total = `${Math.round(total * 100)/100}`
    if (total.length === 4) return total;
    if (total.length === 1) return total + '.00';
    else return total + '0'.repeat(4-total.length);
}
console.log(SeriesSum(1))  //--> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57" 
// 9:36

// Same basic solution, but I need to remember the toFixed method for numbers!
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }