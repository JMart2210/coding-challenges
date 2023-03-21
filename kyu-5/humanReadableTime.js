// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
function humanReadable (seconds) {
    const conv = {
        hour: Math.floor(seconds / 3600),
        min: Math.floor((seconds % 3600) / 60),
        sec: Math.floor((seconds % 3600) % 60)
    }
    return `${conv.hour}`.padStart(2, '0')+':'+`${conv.min}`.padStart(2, '0')+':'+`${conv.sec}`.padStart(2, '0');
}
console.log(humanReadable(59), '00:00:59');
console.log(humanReadable(60), '00:01:00');
console.log(humanReadable(45296), '12:34:56');
console.log(humanReadable(359999), '99:59:59');
// 669-