// Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort();
  arr2 = arr2.sort();
  if (arr1.length !== arr2.length) return false;
  let result = true;
  arr1.forEach( (e, i) => {
    if (e !== arr2[i]) {
      result = false;
    }
  });
  return result;
}
const arr1 = [1, 2, 3],
      arr2 = [2, 1, 3],
      arr3 = [1, 2, 3, 4],
      arr4 = [1, 2, 3, "4"]
console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false