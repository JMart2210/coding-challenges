// https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript
// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 
function nerdify(txt){
    return txt.split('')
    .map(ltr => {
        switch (ltr){
            case 'a':
            case 'A':
                return '4';
            case 'e':
            case 'E':
                return '3';
            case 'l':
                return '1';
            default:
                return ltr;
        }
    }).join('');
}
console.log(nerdify("Fundamentals")) // --> "Fund4m3nt41s"

// This solution uses an object map:
let map = {
    'a': 4,
    'A': 4,
    'e': 3,
    'E': 3,
    'l': 1
  }
  
  function nerdify(txt){
    return txt
            .split('')
            .map(x => map[x] ? map[x] : x)
            .join('');
  }

  // 503