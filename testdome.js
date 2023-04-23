// function removeProperty(obj, prop) {
//   console.log(obj[prop])
//   if (obj[prop]) {
//     console.log('prop exists')
//     delete obj[prop]
//     console.log(obj)
//     return true
//   } else {
//     return false;
//   }
// }

// test = {color: 'green'}

// console.log(removeProperty(test, 'color' ))
// // function createCheckDigit(membershipId) {
// //   let result = membershipId.split('')
// //     .reduce( (acc, curr) => acc + +curr, 0)
// //   return `${result}`.length === 1 ? result : createCheckDigit(`${result}`); 
// // }

// // console.log(createCheckDigit("55555"), '7');
// function simulate(entries) {
//   let copy = [...entries];
//   let m = 0;
//   let r = m + 4;
//   let l = m - 3;
//   entries.forEach( n => {
//     if (n <= entries[l] || n <= entries[r]) copy[m] = 0;
//     m++
//     r++
//     l++
//   }) 
//   return copy;
// }

// const records = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
// console.log( JSON.stringify(simulate(records)) === JSON.stringify([19, 0, 0, 87, 0, 0, 0, 77, 77, 0, 0])) //true

// function initialize() {
//   document.querySelectorAll('.downButton')
//   .forEach( btn => btn.addEventListener('click', (e) => {
//     const currentParent = e.target.parentNode
//     const nextParent = currentParent.nextElementSibling;
//     const currentParentChild = currentParent.firstElementChild
//     const nextParentChild = nextParent.firstElementChild;
//     // prevParent.removeChild(prevParentChild);
//     nextParent.prepend(currentParentChild);
//     currentParent.prepend(nextParentChild);
//   }))
//   document.querySelectorAll('.upButton')
//   .forEach( btn => btn.addEventListener('click', (e) => {
//     const currentParent = e.target.parentNode
//     const prevParent = currentParent.previousElementSibling;
//     const currentParentChild = currentParent.firstElementChild
//     const prevParentChild = prevParent.firstElementChild;
//     // prevParent.removeChild(prevParentChild);
//     prevParent.prepend(currentParentChild);
//     currentParent.prepend(prevParentChild);
//   }))
// }
// Chat GPT suggestion that uses event delegation from parentDiv to handle the click events for all the buttons.
// function initialize() {
//   const downButtons = document.querySelectorAll('.downButton');
//   const upButtons = document.querySelectorAll('.upButton');
//   const parentDiv = document.querySelector('body');

//   parentDiv.addEventListener('click', (e) => {
//     const target = e.target;
//     if (target.classList.contains('downButton')) {
//       const currentParent = target.parentNode;
//       const nextParent = currentParent.nextElementSibling;
//       const currentParentChild = currentParent.firstElementChild;
//       const nextParentChild = nextParent.firstElementChild;
//       nextParent.prepend(currentParentChild);
//       currentParent.prepend(nextParentChild);
//     } else if (target.classList.contains('upButton')) {
//       const currentParent = target.parentNode;
//       const prevParent = currentParent.previousElementSibling;
//       const currentParentChild = currentParent.firstElementChild;
//       const prevParentChild = prevParent.firstElementChild;
//       prevParent.prepend(currentParentChild);
//       currentParent.prepend(prevParentChild);
//     }
//   });
// }

// initialize();

/**
 * @param {HTMLElement} parent The HTML element of the parent
 * @param {string} relativeName The name of relative to be searched
 * @return {HTMLElement} The HTML element of the closest relative
 */

// function closestRelative(parent, relativeName) {
//   for (let i = 0; i < parent.children.length; i++) {
//     if (parent.children[i].nodeName.toLowerCase() === relativeName.toLowerCase()) {
//       return parent.children[i];
//     }
//   }
//   for (let i = 0; i < parent.children.length; i++) {
//     const result = closestRelative(parent.children[i], relativeName);
//     if (result !== null) {
//       return result;
//     }
//   }
//   return null;    
// }

// // Example case
// document.body.innerHTML = 
// '<James>' +
//   '<Dave>' +
//     '<Rob>' +
//       '<Mike></Mike>' +
//     '</Rob>' +
//   '</Dave>' +
//   '<Mike></Mike>' +
//   '<Sarah></Sarah>' +
// '</James>';

// let parent = document.getElementsByTagName('James')[0];
// let relative = closestRelative(parent, 'Mike');
// console.log(relative && relative.tagName); // prints MIKE

// // this is an alternative solution that passed all test cases:
// function closestRelative(parent, relativeName) {
//   const queue = [...parent.children];
//   const tagName = relativeName.toUpperCase();
//   let el;

//   while (queue.length > 0) {
//     el = queue.shift();
//     if (el.tagName === tagName) return el;
//     if (!el.hasChildNodes()) { continue; }

//     for (const childEl of el.children) {
//       queue.push(childEl);
//     }
//   }
//   return null;
// }

// function showCustomers(customers, targetList) {
//   for (const user of customers) {
//     const li = document.createElement('li');
//     const p = document.createElement('p');
//     p.innerText = user.name;
//     li.appendChild(p);
//     targetList.appendChild(li);
//     p.addEventListener('click', e => {
//       if (e.target.nextSibling) e.target.nextSibling.remove();
//       else {
//         const email = document.createElement('p');
//         email.innerText = user.email;
//         li.appendChild(email);
//       }
//     })
//   }
// }

// document.body.innerHTML = `
// <div>
//   <ul id="customers">
//   </ul>
// </div>
// `;
// let customers = [{name: "John", email: "john@example.com"},
//                  {name: "Mary", email: "mary@example.com"}];
// showCustomers(customers, document.getElementById("customers"));

// let customerParagraph = document.querySelectorAll("li > p")[0];
// if(customerParagraph) {
//   customerParagraph.click();
// }
// console.log(document.body.innerHTML);

// 1:25
class Song {
  name;
  nextSong;
  
  constructor(name) {
    this.name = name;
  }
  
  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isInRepeatingPlaylist() {
    let breadcrumbs = {};
    breadcrumbs[this.name] = this.name;
    let song = this.nextSong;
    while (song !== null) {
      console.log(breadcrumbs)
      console.log(song.nextSong)
      if (breadcrumbs[song.name]) {
        return true
      }
      breadcrumbs[song.name] = song.name;
      song = song.nextSong;
    }
    return false;
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");
let third = new Song("The Thong Song");

first.nextSong = second;
second.nextSong = third;
third.nextSong = first;

console.log(second.isInRepeatingPlaylist());