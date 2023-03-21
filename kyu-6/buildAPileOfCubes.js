// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n**3
// , the cube above will have volume of (n - 1)**3 and so on until the top which will have a volume of 1**3
// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?
// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
// n^3 + (n - 1)^3 + (n -2)^2 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
function findNb(m) {
    let n = 1;
    let total = 0;
    while (total < m){
        total += Math.pow(n++, 3)
    }
    return total === m ? n -1 : -1;
    // cube = Math.cbrt(m)
    // return !Number.isInteger(cube) ? -1 : 
    // cube > 1 ? 1 + findNb(Math.pow(cube-1,3)):
    // 1;
}
console.log(findNb(9))
console.log(findNb(1071225)) // --> 45
console.log(findNb(91716553919377)) // --> -1

// This solution reduced the m argument each time, which simplified what you needed to keep track of.
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }