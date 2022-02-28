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
    // const posSeqs = [
    //   // horizontals
    //   [[0, 0], [0, 1], [0, 2]],
    //   [[1, 0], [1, 1], [1, 2]],
    //   [[2, 0], [2, 1], [2, 2]],
    //   // verticals
    //   [[0, 0], [1, 0], [2, 0]],
    //   [[0, 1], [1, 1], [2, 1]],
    //   [[0, 2], [1, 2], [2, 2]],
    //   // diagonals
    //   [[0, 0], [1, 1], [2, 2]],
    //   [[2, 0], [1, 1], [0, 2]]
    // ];
    const posSeqs = [];

    for (let i = 0; i < 8; i++) {
      for (let k = 0; k < 8; k++) {
        posSeqs.push([i, k]);
      }
    }
    for (let i = 0; i < 8; i++) {
      for (let k = 0; k < 8; k++) {
        posSeqs.push([k, i]);
      }
    }
    for (let i = 0; i < 8; i++) {
      posSeqs.push([i, i]);
    }
    for (let i = 7; i >= 0; i--) {
      posSeqs.push([i, i]);
    }

    for (let i = 0; i < posSeqs.length; i++) {
      const winner = this.winnerHelper(posSeqs[i]);
      if (winner != null) {
        return winner;
      }
    }

    return null;
  }

  winnerHelper(posSeq) {
    // for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {
    //   const targetMark = Board.marks[markIdx];
    //   let winner = true;
    //   for (let posIdx = 0; posIdx < 8; posIdx++) {
    //     const pos = posSeq[posIdx];
    //     const mark = this.grid[pos[0]][pos[1]];

    //     if (mark != targetMark) {
    //       winner = false;
    //     }
    //   }

    //   if (winner) {
    //     return targetMark;
    //   }
    // }

    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {
      const targetMark = Board.marks[markIdx];

    }

    return null;
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
