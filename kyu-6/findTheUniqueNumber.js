// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// numbers -> can be decimals, not empty, can be negative
// return -> the actual unique number
function findUniq(arr) {
    let test;
    // test for unique char in first 3 spots
    if ( arr[0] === arr[1] ) {
        test = arr[0];
    }else if( arr[0] === arr[2]){
        return arr[1];
    }else {
        return arr[0]
    }
    // filters array for test
    return Number(arr.filter( n => n !== test))
}

// Definitely should have sorted array. Way simpler.
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
}
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
// a little more consolidated version of what I did
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
}
console.log(findUniq([ 1, 1, 1, 2, 1]), '2');
console.log(findUniq([ -2, 3, 3, 3]), '-2');
console.log(findUniq([ 0, 0, 0, 0.5]), '0.5');

// 669