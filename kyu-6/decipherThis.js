// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
// For each word:
// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces
function decipherThis(str) {
    const isChar = (x) => x.toLowerCase() !== x.toUpperCase();
    array = str.split(' ');
    return array.map( word => {
        let firstLtr = '';
        let secondLtr = '';
        let lastLtr = '';
        let midLtr = '';
        let index = 0;
        for (ltr of word){
            if (isChar(ltr)) {
                index = word.indexOf(ltr);
                break;
            }
        }
        if (index === 0) return String.fromCharCode(word)
        else firstLtr = String.fromCharCode(word.slice(0,index));
        if (word.length - index <= 1) lastLtr ='';
        else lastLtr = word.slice(index, index+1);
        secondLtr = word.slice(-1)
        midLtr = word.slice(index+1,-1);
        return firstLtr+secondLtr+midLtr+lastLtr;
    }).join(' ');
}; 
// console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
// console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')) // Have a go at this and see how you do

// Alternative solution. parseFloat function would have been very helpful
const decipherThis = text => text
    .split(' ')
    .map(e => {
        const num = parseFloat(e) || '';
        const word = e.split(num)[1];

        if (word.length === 1) return String.fromCharCode(num) + word;
        return String.fromCharCode(num) + word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    })
    .join(' ')
