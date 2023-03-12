// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
// Modify the kebabize function so that it converts a camel case string into a kebab case.
// the returned string should only contain lowercase letters
function kebabize(str) {
  
  for (ltr of str){
    console.log(ltr)
  }
}
console.log(kebabize("camelsHaveThreeHumps")) //  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"