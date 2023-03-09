// https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript
// Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
// Heron's formula:
// sqrt of s*(s-a)*(s-b)*(s-c)
// s= (a+b+c)/2
// Output should have 2 digits precision.
function heron(a, b, c) {
    const s = (a+b+c)/2
    return Number(Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(2));
}
console.log(heron(3,4,5)) // 6