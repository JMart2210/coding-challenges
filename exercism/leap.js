// https://exercism.org/tracks/javascript/exercises/leap
// Given a year, report if it is a leap year.
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.
const isLeap = (yr) => {
  if (yr % 400 === 0) return true;
  if (yr % 100 === 0) return false;
  if (yr % 4 === 0) return true;
  return false;
};
module.exports = isLeap;
