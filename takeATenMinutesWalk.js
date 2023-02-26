// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
function isValidWalk(walk) {
    if (walk.length != 10) return false;
    let place = {x : 0, y : 0}
    const conversion = {
        n: 1, s: -1,
        e: 1, w: -1
    }
    walk.forEach(element => {
        if (element === 'n' || element === 's') place.y += conversion[element];
        else place.x += conversion[element];
    });
    return (place.x === 0 && place.y === 0) 
}
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) // false

// implemented a count function and just checked that n=s and e=w.
function isValidWalk(walk) {
    function count(val) {
      return walk.filter(function(a){return a==val;}).length;
    }
    return walk.length==10 && count('n')==count('s') && count('w')==count('e');
  }
  // This one seemed the most readable and succinct code to me:
  function isValidWalk(walk) {
    var res = {n:0, w:0, s:0, e:0};
    walk.forEach((c) => res[c]++);
    return walk.length === 10 && res.n == res.s && res.e == res.w;
  }