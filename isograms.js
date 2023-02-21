// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
function isIsogram(str){
   let result = true;
   str.toLowerCase().split('').forEach((element, i, arr) => {
      if (arr.slice(i+1).includes(element)) result = false;
   });
   return result;
  }
  // highest rated solution w/ explanation: Set objects let you store unique values, just as mathematical sets. So in theory if you store the word 'mooose' in a set it should have only 4 values for each unique word(m,o,s,e). With that you solve the part of 'counting' unique words. Afterwards you just compare the lenght of a set with the lenght of a passed string. If they match it means words are unique since set can only have unique values. 
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

  console.log(isIsogram('aba'));