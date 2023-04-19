// https://leetcode.com/problems/merge-two-sorted-lists/
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// Based on examples, I didn't realize linked lists were different from arrays. I'll do this another time. 
var mergeTwoLists = function(list1, list2) {
  let result = [];
  while (list1.length > 0 || list2.length > 0){
    if (list1[0] < list2[0] || list2[0] === undefined) result.push(list1.shift())
    else result.push(list2.shift());
  }
  return result;
};

console.log(mergeTwoLists([1,2,5], [1,3,4]), [1,1,2,3,4,5])
console.log(mergeTwoLists([], [0]), [0])