// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// Note: For 4 or more names, the number in "and 2 others" simply increases.
function likes(names) {
    let num = names.length
    switch (true) {
        case num <= 0:
            return "no one likes this"
        case num === 1:
            return `${names[0]} likes this`
        case num === 2:
            return `${names[0]} and ${names[1]} like this`
        case num === 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        case num > 3:
            return `${names[0]}, ${names[1]} and ${num - 2} others like this`
        default:
            break;
    }
}
console.log(likes([])); // No one likes this"
console.log(likes(["Jacob", "Alex"]));                 //  "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"]));           //  "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));  //  "Alex, Jacob and 2 others like this"
console.log(likes(["Peter"]));                        //  "Peter likes this"

// The top voted submission was very similar to mine, but below was the most interesting solution. It simply returns an
// object with an identifier. In this case, the identifier: [Math.min(4, names.length)] is telling it what key
// value to use. This identifier gives you a key between 0 and 4. It's a similar structure to this logging 
// example:   console.log({"one": "valueOne"}["one"]); // "valueOne"

function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }