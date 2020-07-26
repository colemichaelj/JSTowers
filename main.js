'use strict';
// assert library is used for testing 
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//the stacks objects represents the entire toy
//the arrays are the rods in the toy
//the numbers represent the disk
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//prints the "board"
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// This function takes in the startstack name and endstack name 
const movePiece = (startStack,endStack) => {
  let moveStack = stacks[startStack]
  let stacktwo = stacks[endStack]
  let piece = moveStack.pop(); // piece equals the last column of the chosen array
  stacktwo.push(piece); // tworods moves the piece to the array that was chosen  
  //twoStack.push(moveStack.pop())
  console.log(piece)



}

const isLegal = (startStack,endStack) => {
  let moveStack = stacks[startStack] // stacks a
  let twostack = stacks[endStack] //stack b
  let moveStackPiece = moveStack[moveStack.length - 1] // stack at "a" will be the last index
  let stacktwo = stacktwo[stacktwo.length -1]  // stack at "b" will be the last index
  console.log(twoStack)
  //When moving a piece to a postion that is blank the computer does know no less the postion is undefined
  if(moveStackPiece < stacktwo || stacktwo == undefined){
    return true
  }
  else{
    return false
  }
}

const checkForWin = () => {
  if(stacks.b.length === 4){
    return true;
  }
  else{
    return false;
  }
}
const towersOfHanoi = (startStack, endStack) => {
  if (isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
  }
}


// the first thing is print out the board
const getPrompt = () => {
  printStacks();
  // it asks the user for the starting stack
  rl.question('start stack: ', (startStack) => {
    // once the user enters the starting stack, it asks for the ending stack
    rl.question('end stack: ', (endStack) => {

    // once the user enters the ending stack
    // it sends both inputs (startstack and endstack) to a function called towersofHanoi()
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// once that function returns, then call getprompt() over again
describe("# what are you testing", function() {
  it ("legal move, this should work", function() {
      //setup your world
      stacks = {
        a: [4,3,2,1],
        b: [],
        c: []
      };
      //call the code you are testing
      assert.equal(isLegal('a','c'), true);
      //verify your results (using assest.equals, ...)
  });
  it ("illegal move, should not work", function() {
    //setup your world
    stacks = {
      a: [4,3,2],
      b: [1],
      c: []
    };
    //call the code you are testing
    assert.equal(isLegal('a','b'), false);
    //verify your results (using assest.equals, ...)
  });
});
describe("# what are you testing", function() {
  it ("check for win", function() {
      //setup your world
      stacks = {
        a: [],
        b: [4,3,2,1],
        c: []
      };
      assert.equal(checkForWin(), true);
      //call the code you are testing
      //verify your results (using assest.equals, ...)
      stacks = {
        a: [1],
        b: [4,3,2],
        c: []
      };
      assert.equal(checkForWin(), false);
  });
});
console.log(" ----------->>>>>>> Playing the game");
getPrompt();