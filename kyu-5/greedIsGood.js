// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
// Example scoring
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
function score( dice ) {
    const result = {
        1: 0, 2: 0, 3: 0, 
        4: 0, 5: 0, 6: 0,
    }
    let points = 0;
    for (n of dice){
        result[n]++
    }
    Object.entries(result).forEach(([k,v]) => {
        if (v >= 3) {
            points += k === '1' ? k*1000 : k*100;
            result[k] += -3;
            v += -3;
        }
        if (k === '1' && v > 0) {
            points += 100 * v;
            result[k] = 0;
        } else if (k === '5' && v > 0){
            points += 50 * v;
            result[k] = 0;
        }
    }) 
    return points;
}

console.log( score( [1, 1, 4, 1, 1] )) // 1,100
console.log( score( [2, 4, 4, 5, 4] )) // 450

// This solution just used an array since the index easily translates to the dice number.
// They simplified scoring into arrays, which made it easier to follow and used a reduce 
// method to accumulate score and the modulus 3 result to account for duplicate numbers.
function score( dice ) {
    var dc = [0,0,0,0,0,0];
    var tdr = [1000,200,300,400,500,600];
    var sdr = [100,0,0,0,50,0];
    dice.forEach(function(x){ dc[x-1]++; });
    return dc.reduce(function(s,x,i){ 
      return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
    },0);
  }