// https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/javascript
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
function order(words){
    result = [];
    words = words.split(' ');
    for (let i = 1; i <= words.length; i++) {
        words.forEach(element => { 
            if (element.includes(i)) result[i-1] = element;
        });
    }
    console.log(result);
    return result.join(' ');
}
console.log(order('is2 Thi1s T4est 3a')) // "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// Top voted solution is below. I liked my solution best of the ones that didn't use Regex.
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}   