// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
class Ghost {
  constructor(){
    let options = ['white', 'yellow', 'purple', 'red'];
    this.color = options[Math.floor(Math.random()*4)]
  }
}
ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"

let x = 0;