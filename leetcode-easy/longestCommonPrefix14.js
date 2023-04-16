// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function(strs) {
    //create a loop the length of the first word
  for (let i= 0; i < strs[0].length; i++){
    // create loop to length of word list
    for (let j = 0; j < strs.length - 1; j++){
      // compare the first letter of word 1 to first letter of each word
      if (strs[j][i] !== strs[j+1][i]) return strs[0].slice(0,i);
    }
  }
  return strs[0];
}; 

// Example 1:
console.log(longestCommonPrefix( ["flower","flow","flight"]), 'fl');
// Example 2:
console.log(longestCommonPrefix( ["dog","racecar","car"] ), 'blank') // Output: ""
console.log(longestCommonPrefix(['flower', 'flow']), 'flow')

// Example solution using reduce
var longestCommonPrefix = function(strs) {
  'use strict';
  if (strs === undefined || strs.length === 0) { return ''; }
  
  return strs.reduce((prev, next) => {
      let i = 0;
      while (prev[i] && next[i] && prev[i] === next[i]) i++;
      return prev.slice(0, i);
  });
};