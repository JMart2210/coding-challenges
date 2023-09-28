// https://www.codewars.com/kata/56cca888a9d0f25985000036/train/javascript
// I've invited some kids for my son's birthday, during which I will give to each kid some amount of candies.
// Every kid hates receiving less amount of candies than any other kids, and I don't want to have any candies left - giving it to my kid would be bad for his teeth.
// However, not every kid invited will come to my birthday party.
// What is the minimum amount of candies I have to buy, so that no matter how many kids come to the party in the end, I can still ensure that each kid can receive the same amount of candies, while leaving no candies left?
// It's ensured that at least one kid will participate in the party.
function candiesToBuy( kids ){
  // the amount of candies to buy
  let candies = 1;
  // the amount of kids that have received candies
  let i = 1;
  // while the amount of kids that have received candies is less than the amount of kids invited
  while (i < kids) {
    candies += 1;
    i += 1;
    if (candies % i !== 0) {
      candies += 1;
      i = 1;
    }
  }
  return candies;
}
console.log(candiesToBuy(1),'1');
console.log(candiesToBuy(2),'2');
console.log(candiesToBuy(3),'6');
console.log(candiesToBuy(4),'12');
console.log(candiesToBuy(5),'60');
console.log(candiesToBuy(20),'232792560');