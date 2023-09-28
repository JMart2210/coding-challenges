// https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript
// You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!
// The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.
// Your function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:
// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.
// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.
function splitTheBill(x) {
  let paid = Object.values(x).reduce( (acc, curr) => acc + curr, 0)
  paid = paid / Object.keys(x).length
  const result = {}
  for ([key, value] of Object.entries(x)){
    result[key] =  +(value - paid).toFixed(2);
  }
  return result;
}
console.log(splitTheBill({A: 20, B: 15, C: 10}), {A: 5, B: 0, C: -5})
console.log(splitTheBill({A: 40, B: 25, X: 10}), {A: 15, B: 0, X: -15})

// This seemed a good solution. 
// Might be able to break out the bottom statement for readability
// but that might just be my inexperience. Reduce initializes with 
// an empty function and each iteration is passed the full object
// as it is being added to.
const splitTheBill = x => {
  let vals = Object.values(x),
      avg  = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
}

// 719