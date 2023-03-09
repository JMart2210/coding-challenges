// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript
// To find the volume (centimeters cubed) of a cuboid you use the formula:
// volume = Length * Width * Height
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
// It's up to you to find out whether the cuboid has equal sides (= is a cube).
// Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
// Note: side will be an integer

var cubeChecker = function(volume, side){
    return (volume <= 0 || side <= 0) ? false : side**3 === volume;
  };

  // slightly simplified version. Compared to my solution, my first conditional evaluates to false anyway.
  var cubeChecker = function(volume, side){
    return Math.pow(side, 3) === volume && side > 0;
  };