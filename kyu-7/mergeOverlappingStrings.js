// https://www.codewars.com/kata/61c78b57ee4be50035d28d42/train/javascript
// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.
// NOTE: The algorithm should always use the longest possible overlap.
function mergeStrings(first, second){
    for (let i = 0; i < first.length; i++){
        if (second.startsWith(first.slice(i))) {
            return first.slice(0, i) + second;
        }
    }
    return first + second;
}
console.log(mergeStrings("abcde", "cdefgh")) // => "abcdefgh"
 console.log(mergeStrings("abaabaab", "aabaabab")) // => "abaabaabab"
console.log(mergeStrings("bcd" , "abc")) // => "abc"
console.log(mergeStrings('abcd', 'dabcd')) // 'abcdabcd'
console.log(mergeStrings('', 'aaa')) // 'aaa'

// 501