// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}
function aliasGen(f, l){
    const isChar = x => x.toLowerCase() != x.toUpperCase(); //isChar('1');
    if ( !isChar(f.charAt(0)) || !isChar(l.charAt(0)) ) return 'Your name must start with a letter from A - Z.';
    return `${firstName[f.charAt(0).toUpperCase()]} ${surname[l.charAt(0).toUpperCase()]}`
}

console.log(aliasGen('Larry', 'Brentwood')) // === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'


// I can't actually run this in VSCode because the objects aren't preloaded
const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}

// 499