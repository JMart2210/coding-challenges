function translate2d(dx, dy) {
    return (a, b) => [a+dx, b+dy];
}
const moveCoordinatesRight2Px = translate2d(2, 0);
let result = moveCoordinatesRight2Px(4, 8); // [6,8]


function scale2d(sx, sy) {
    return (a, b) => [a*sx, b*sy];
}
const doubleScale = scale2d(2, 2);
result = doubleScale(6, -3); //[12,-6]

function composeTransform(f, g) {
    return (a, b) => g(...f(a, b));
}
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates
);
result = composedTransformations(0, 1);  // result => [4, 2]

function memoizeTransform(f){
    let memo = [];
    let val = [];
      return (a, b) => {
        console.log(memo)
        if (memo[0] === a && memo[1] === b) return val;
        else {
          memo.splice(0,2,...[a, b]);
          return val = f(a, b);
        }
      }
}
const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

// console.log(memoizedScale(4, 3)); // => [12, 9], this is computed since it hasn't been computed before for the arguments
// console.log(memoizedScale(4, 3)); // => [12, 9], this is remembered, since it was computed already
// console.log(memoizedScale(5, 1));

// https://exercism.org/tracks/javascript/exercises/space-age/edit
const age = (planet, sec) => {
  const convert = {
    'earth': 1.0,
    'mercury': 0.2408467,
    'venus' : 0.61519726,
    'mars' : 1.8808158,
    'jupiter' : 11.862615,
    'saturn' : 29.447498,
    'uranus' : 84.016846,
    'neptune' : 164.79132,
  }
  return Number((sec / 31557600 / convert[planet]).toFixed(2));
};

// https://exercism.org/tracks/javascript/exercises/pangram
const isPangram = (sentence) => {
  if (sentence.length === 0) return false;
  sentence = sentence.toLowerCase()
  const check = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let result = true;
  console.log(sentence)
  check.forEach( ltr => {
    if (sentence.includes(ltr)) {
      console.log(`includes ${ltr}`);
    } else {
      result = false;
    }
  })
  return result;
};