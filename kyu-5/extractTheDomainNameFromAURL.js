// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");