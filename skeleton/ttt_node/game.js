const Board = require("./board");
const MoveError = require("./moveError");

class Game {
  constructor() {
    this.board = new Board();
    this.currentPlayer = Board.marks[0];
  }

  isOver() {
    return this.board.isOver();
  }

  playMove(pos) {
    this.board.placeMark(pos, this.currentPlayer);
    this.swapTurn();
  }

  movePiece(currentPos, pos) {
    console.log(currentPos);
    console.log("hjsdi")
    let piece = this.board.getPiece(currentPos);
    this.board.grid[pos[0]][pos[1]] = piece;
    this.board.grid[currentPos[0]][currentPos[1]] = null;
  }

  promptMove(reader, callback) {
    const game = this;

    this.board.print();
    console.log(`Current Turn: ${this.currentPlayer}`);

    reader.question('Enter rowIdx: ', rowIdxStr => {
      const rowIdx = parseInt(rowIdxStr);
      reader.question('Enter colIdx: ', colIdxStr => {
        const colIdx = parseInt(colIdxStr);
        callback([rowIdx, colIdx]);
      });
    });
  }

  run(reader, gameCompletionCallback) {
    this.promptMove(reader, move => {
      try {
        this.playMove(move);
      } catch (e) {
        if (e instanceof MoveError) {
          console.log(e.msg);
        } else {
          throw e;
        }
      }

      if (this.isOver()) {
        this.board.print();
        if (this.winner()) {
          console.log(`${this.winner()} has won!`);
        } else {
          console.log('NO ONE WINS!');
        }
        gameCompletionCallback();
      } else {
        // continue loop
        this.run(reader, gameCompletionCallback);
      }
    });
  }

  swapTurn() {
    if (this.currentPlayer === Board.marks[0]) {
      this.currentPlayer = Board.marks[1];
    } else {
      this.currentPlayer = Board.marks[0];
    }
  }

  winner() {
    return this.board.winner();
  }
}

module.exports = Game;

// let newGame = new Game();
// console.log(newGame.board.grid);
// newGame.board.placeMark([0, 0], 'X');
// newGame.board.placeMark([0, 1], 'X');
// newGame.board.placeMark([0, 2], 'X');
// newGame.board.placeMark([0, 3], 'X');
// newGame.board.placeMark([0, 4], 'X');
// newGame.board.placeMark([0, 5], 'X');
// newGame.board.placeMark([0, 6], 'X');
// newGame.board.placeMark([0, 7], 'X');
// newGame.board.print();
// console.log(newGame.winner());