// https://www.codewars.com/kata/57241cafef90082e270012d8/train/javascript
// Third day at your new cryptoanalyst job and you come across your toughest assignment yet. Your job is to implement a simple keyword cipher. A keyword cipher is a type of monoalphabetic substitution where two parameters are provided as such (string, keyword). The string is encrypted by taking the keyword, dropping any letters that appear more than once. The rest of the letters of the alphabet that aren't used are then appended to the end of the keyword.
// For example, if your string was "hello" and your keyword was "wednesday", your encryption key would be 'wednsaybcfghijklmopqrtuvxz'.
// To encrypt 'hello' you'd substitute as follows,
//               abcdefghijklmnopqrstuvwxyz
//   hello ==>   |||||||||||||||||||||||||| ==> bshhk
//               wednsaybcfghijklmopqrtuvxz
// hello encrypts into bshhk with the keyword wednesday. This cipher also uses lower case letters only.
function keywordCipher(string, keyword){
  const t = {};
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let str = ''
  // removes duplicate letters from keyword
  keyword.split('').forEach(ltr => str.includes(ltr) ? 0 : str += ltr);
  // cycles thru alphabet to provide start of string "key"
  alphabet.forEach( ltr => str.includes(ltr) ? 0 : str += ltr);
  // cycle thru alphabet again and puts string "key" into a table object that we can reference 
  alphabet.forEach( (ltr, i) => t[ltr] = str[i] )
  // maps every letter in string to table and returns resulting string
  return string.toLowerCase().split('').map(ltr => t[ltr] ? t[ltr] : ltr).join('');
}
console.log(keywordCipher("hello","wednesday")); //bshhk
console.log(keywordCipher( "WELCOME HOME", "gridlocked")); // "wlfimhl kmhl"

//527