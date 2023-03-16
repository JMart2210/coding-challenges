// https://www.codewars.com/kata/5821cd4770ca285b1f0001d5/train/javascript
// There is an array representing the squares on the game board.
// The starting square is at array element 0. The final square is the last array element.
// At each "turn" you move forward a number of places (according to the next dice throw).
// The value at the square you end up on determines what happens next:
// 0 Stay where you are (until next turn)
// +n This is a "ladder". Go forward n places
// -n This is a "snake". Go back n places
// Each snake or ladder will always end on a square with a 0, so you will only go up or down one at a time.
// Rules
// You are given a number of dice throws. The game continues until either:
// You have no throws left, OR
// You end up exactly on the final square
// At each turn, make your move, then go up the "ladders" and down the "snakes" as appropriate.
// If the dice roll overshoots the final square then you cannot move. Roll the dice again.
// Task
// Return the index of the array element that you ended up on at the end of the game.
// Example
// Start
// Dice: [2, 1, 5, 1, 5, 4]
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]
// Roll a 2. Move forward 2 squares, then go up the ladder (+3)
// Dice: [2, 1, 5, 1, 5, 4]
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// Roll a 1. Move forward 1 square
// Dice: [2, 1, 5, 1, 5, 4]
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// Roll a 5. Can't move
// Dice: [2, 1, 5, 1, 5, 4]
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// Roll a 1. Move forward 1 square, then go down the snake (-2)
// Dice: [2, 1, 5, 1, 5, 4]
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// Roll a 5. Move forward 5 squares
// Dice: [2, 1, 5, 1, 5, 4]            
// Board: [0, 0, 3, 0, 0, 0, 0, -2, 0, 0, 0]              
// You are on the final square so the game ends. Return 10
var snakesAndLadders = function(board, dice) {
    let mark = 0;
    while (mark !== 10){
        dice.forEach( r => {
            let spot = board[r + mark];
            if (spot === 0) mark += r;
            else if (spot) mark += r + spot;
        })
        return mark;
    }
}
console.log(snakesAndLadders([0,0,3,0,0,0,0,-2,0,0,0],[2,1,5,1,5,4],)) //10
//557 - 565

// This solution is simpler and more readable than mine. Part of the reason is the 
// conditional is >+ board length continues out of the loop, which eliminates my while loop
var snakesAndLadders = function (board, dice) {
    let square = 0;
    for (let die of dice) {
        if (square + die >= board.length) {
            continue;
        }
        square += die;
        square += board[square];
    }
    return square;
}