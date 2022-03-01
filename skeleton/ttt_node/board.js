const MoveError = require("./moveError");

class Board {
  constructor() {
    this.grid = Board.makeGrid();
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

Board.marks = ['x', 'o'];

module.exports = Board;
