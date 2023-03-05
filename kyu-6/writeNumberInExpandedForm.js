// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// NOTE: All numbers will be whole numbers greater than 0.
function expandedForm(num) {
    num = `${num}`.split('');
    let result = [];
    for (let i = num.length -1; i >= 0; i--){
        const rep = num.length - i - 1;
        if ( num[i] !== '0' ) result.unshift( num[i] + '0'.repeat(rep) );
    }
    return result.join(' + ')
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

// alternative solution:
function expandedForm(num) {
    return String(num)
            .split("")
            .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
            .filter((num) => Number(num) != 0)
            .join(" + ")
  }