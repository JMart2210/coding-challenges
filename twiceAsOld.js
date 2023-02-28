// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let count = 0;
    if (sonYearsOld * 2 < dadYearsOld ) {
        while ( sonYearsOld++ * 2 !== dadYearsOld++) {
            count++
        }
    }else while ( sonYearsOld-- *2 !== dadYearsOld--){
        count++
    }
    return count;
  }
  console.log(twiceAsOld(45, 25)); //should be 5
  // way simpler solution
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }