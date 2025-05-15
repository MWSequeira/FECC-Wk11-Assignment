// Tic Tac Toe game
// Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
// Create a Tic-Tac-Toe game grid using your HTML element of choice.
// When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
// A heading should say whether it is X's or O's turn and change with each move made.
// A button should be available to clear the grid and restart the game.
// When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.



//STATE
// Data -- Create the Game Board
let board = [0, 1, 2, 3, 4, 5, 6, 7, 8]
// Each square corresponds to an element in this array. Add an event listener to each square.

// Win Combinations: vertical, horizontal, diagonal
let winsCombo = [
    [0, 3, 6], // vert left
    [1, 4, 7], // vert center
    [2, 5, 8], // vert right
    [0, 1, 2], // horiz top
    [3, 4, 5], // horiz middle
    [6, 7, 8], // horiz bottom
    [0, 4, 8], // diag top left to bottom right
    [2, 4, 6] // diag top right to bottom left
]

// Game tracking
let turn = "X"; // or "O"
let winner = false;
let message = "keep playing";

// state functions
function changeTurn () {
    if (winner === false){
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X"
        }
    }
    return turn;
} 

function checkForWin (turn) {
    let i = 0
    while (i < winsCombo.length) {
        if (board[winsCombo[i][0]] === turn &&
            board[winsCombo[i][1]] === turn &&
            board[winsCombo[i][2]] === turn) {
                winner = true; 
        }   
        i++; 
    }
    return winner;
}

// EVENT LISTENERS
// link the squares to the board array
for (let i = 0; i < board.length; i++) {
    board[i] = document.getElementById(`sq${i+1}`)
}


// function selectSquare () {
    
// }

// RENDERING FUNCTIONS
function showMessage() {
    let currentMessage = document.getElementById("message");
    currentMessage.textContent = message;
}





// PLAYGROUND

// GAME BOARD
// let top = ["left", "middle", "right"];
// let mid = ["left", "middle", "right"];
// let bot = ["left", "middle", "right"]; 

// function checkForWin (turn) {
//     for (let i = 0; i < 3; i++){
//      if (top[i] === turn && mid[i] === turn && bot [i] === turn) {
//          message = `Player ${turn} wins!`;
//      }
//     }
//     if (top [0] === turn && top[1] === turn && top[2] === turn) {
//      message = `Player ${turn} wins!`;
//     }
//     if (mid [0] === turn && mid[1] === turn && mid[2] === turn) {
//      message = `Player ${turn} wins!`;
//     }
//     if (bot [0] === turn && bot === turn && bot === turn) {
//      message = `Player ${turn} wins!`;
//     }
//     if (top[0] === turn && mid[1] === turn && bot[2] === turn) {
//      message = `Player ${turn} wins!`;
//     }
//     if (top[2] === turn && mid[1] === turn && bot[0] === turn) {
//      message = `Player ${turn} wins!`;
//     }
//  }