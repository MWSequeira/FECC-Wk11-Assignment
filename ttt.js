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

// Game tracking -- starting state
let turn = "X"; // or "O"
let winner = false; // no winner yet
let message = "keep playing"; // no winner yet
showMessage(changeMessage(winner)); // start with the initial message

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

function checkForEnd (board) {
    let sum = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "X" || board[i] === "O") {
            sum = sum + 1; // if the square is filled, add one.
        }
    }
    if (sum === 9) {
        return true
    } else {
        return false;
    }
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

function changeMessage (winner){
    if (winner === true) {
        message = `Winner: ${turn}!`
    }
    return message;
}


// EVENT LISTENERS

// link the squares to the board array
let squares = [];
for (let i = 0; i < board.length; i++) {
    squares.push(document.getElementById(`sq${i}`));
}

function selectSquare (square) {
    showMessage(message);
    if (board[square] !== "X" && board[square] !== "O") {
        board[square] = turn; // put an X or O in the board array
        squares[square].textContent = turn; // display the X or O
    } else {
        showMessage("Square Take. Pick Another.")
        return board; // immediately exit this function if the square is already taken
    }
        
    if (checkForWin(turn) === true) {
        changeMessage(checkForWin(turn));
        showMessage(message);
    } 

    if (checkForEnd(board) === true) {
        endOfGame();
    }

    changeTurn();

    return board;
}



// RENDERING FUNCTIONS
function showMessage(message) {
    let currentMessage = document.getElementById("message");
    currentMessage.textContent = message;
}

function endOfGame() {
    message = "End of Game";
    showMessage(message);
    let button = document.createElement("button")
    button.textContent = "Play Again";
    button.appendChild(button);
}
