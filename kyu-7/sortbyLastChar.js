https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.
function last(x){
  return x.split(' ').sort( (a, b) => {
    let la = a.slice(-1);
    let lb = b.slice(-1);
    console.log(la, lb)
    if (la > lb) {
      return 1;
    }
    if (la < lb) {
      return -1;
    }
    return 0;
  });
}

console.log(last('what time are we climbing up the volcano') ) // ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']); 

//A few alternative soltions. 
const last = ( $ ) => $.split(' ').sort((a,b)=> a.slice(-1) > b.slice(-1))

const lastChar = (str) => (str[str.length - 1] || '');
const sorter = (a, b) => lastChar(a).localeCompare(lastChar(b));
const last = (str) => str.split(' ').sort(sorter);

// 547 - 549