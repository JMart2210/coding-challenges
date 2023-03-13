// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// Don't forget to check for bad values like null/undefined
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter( x => x === true).length
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true])) //The correct answer would be 17.

// apparently you can just pass Boolean into filter method
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
//529