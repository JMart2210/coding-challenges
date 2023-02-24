// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
function numberOfPairs(gloves){
    let arr = [...gloves].sort();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]){
            count++;
            i++;
        }
    }
    return count;
}
console.log(numberOfPairs(["red", "green", "red", "blue", "blue"]));
// result = 2 (1 red pair + 1 blue pair)
console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]));
// result = 3 (3 red pairs)

// This solution used an object
function numberOfPairs(gloves) {
    let pairs = 0;
    let count = {}
    for (let color of gloves) {
      if (color in count) {
        count[color]++;
      } else {
        count[color] = 1;
      }
      if (count[color] === 2) {
        pairs++;
        count[color] = 0;
      }
    }
    return pairs;
  }