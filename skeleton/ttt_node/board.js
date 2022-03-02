const MoveError = require("./moveError");


class Piece {
  constructor(color) {
      this.color = color;
  }
}


class Pawn extends Piece {
  hasMoved() {
      this.hasMoved = true;
  }

}

class Knight extends Piece {

}

class Rook extends Piece {

}

class King extends Piece {

}

class Cannon extends Piece {

}

class Bishop extends Piece {

}

class Board {
  constructor() {
    this.grid = Board.makeGrid();


    // for (let i = 0; i < 8; i++) {
    //   this.grid.push([]);
    // }

    for (let i = 0; i < 8; i++) {
      this.placePiece(new Pawn('Black'), [1, i]);
    }

    this.placePiece(new Knight('Black'), [0, 1]);
    this.placePiece(new Knight('Black'), [0, 6]);
    this.placePiece(new Rook('Black'), [0, 0]);
    this.placePiece(new Rook('Black'), [0, 7]);
    this.placePiece(new Bishop('Black'), [0, 2]);
    this.placePiece(new Bishop('Black'), [0, 5]);
    this.placePiece(new King('Black'), [0, 4]);
    this.placePiece(new Cannon('Black'), [0, 3]);

    for (let i = 0; i < 8; i++) {
      this.placePiece(new Pawn('White'), [6, i]);
    }

    this.placePiece(new Knight('White'), [7, 1]);
    this.placePiece(new Knight('White'), [7, 6]);
    this.placePiece(new Rook('White'), [7, 0]);
    this.placePiece(new Rook('White'), [7, 7]);
    this.placePiece(new Bishop('White'), [7, 2]);
    this.placePiece(new Bishop('White'), [7, 5]);
    this.placePiece(new King('White'), [7, 4]);
    this.placePiece(new Cannon('Black'), [7, 3]);


  }

  getPiece(pos) {
    return this.grid[pos[0]][pos[1]];
  }

  placePiece(piece, pos) {
    this.grid[pos[0]][pos[1]] = piece;
  }

  isEmptyPos(pos) {
    if (!Board.isValidPos(pos)) {
      throw new MoveError('Is not valid position!');
    }

    return (this.grid[pos[0]][pos[1]] === null);
  }

  isOver() {
    if (this.winner() != null) {
      return true;
    }

    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        if (this.isEmptyPos([rowIdx, colIdx])) {
          return false;
        }
      }
    }

    return true;
  }

  placeMark(pos, mark) {
    if (!this.isEmptyPos(pos)) {
      throw new MoveError('Is not an empty position!');
    }

    this.grid[pos[0]][pos[1]] = mark;
  }

  print() {
    const strs = [];
    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {
      const marks = [];
      for (let colIdx = 0; colIdx < 8; colIdx++) {
        marks.push(
          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : " "
        );
      }
      strs.push(`${marks.join('|')}\n`);
    }

    console.log(strs.join('-----\n'));
  }

  winner() {
    if (this.winRows()) {
      return this.winRows();
    }
    if (this.winCols()) {
      return this.winCols();
    }

    return null;
  }

  winCols() {
    for (let i = 0; i < this.grid.length; i++) {
      let col = [];
      for (let j = 0; j < this.grid.length; j++) {
        col.push(this.grid[j][i])
      }
      let winner = col[0];
      if (this.winRow(col)) {
        return winner;
      }
    }

    return false;
  }

  // winCol() {

  // }

  winRows() {
    for (let i = 0; i < this.grid.length; i++) {
      let row = this.grid[i];
      let winner = this.grid[i][0];
      if (this.winRow(row)) {
        return winner;
      }
    }

    return false;
  }

  winRow(row) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === null || row[i] !== row[0]) {
        return false;
      }
    }

    return true;
  }

  static isValidPos(pos) {
    return (0 <= pos[0]) &&
    (pos[0] < 8) &&
    (0 <= pos[1]) &&
    (pos[1] < 8);
  }

  static makeGrid() {
    const grid = [];

    for (let i = 0; i < 8; i++) {
      grid.push([]);
      for (let j = 0; j < 8; j++) {
        grid[i].push(null);
      }
    }

    return grid;
  }
}

let sup = new Board();
console.log(sup);

Board.marks = ['x', 'o'];

module.exports = Board;


