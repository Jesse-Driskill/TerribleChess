const MoveError = require("./moveError");


class Piece {
  constructor(color, img, id) {
      this.color = color;
      this.img = img;
      this.id = id;
  }
}


class Checkers extends Piece {


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
      this.placePiece(new Checkers('Black', 'assets/blackcircle.png', 'checker-piece'), [1, i]);
    }

    this.placePiece(new Knight('Black', 'assets/BlackKnight.png', 'knight'), [0, 1]);
    this.placePiece(new Knight('Black', 'assets/BlackKnight.png', 'knight'), [0, 6]);
    this.placePiece(new Rook('Black', 'assets/BlackRook.png', 'rook'), [0, 0]);
    this.placePiece(new Rook('Black', 'assets/BlackRook.png', 'rook'), [0, 7]);
    this.placePiece(new Bishop('Black', 'assets/BlackBishop.png', 'bishop'), [0, 2]);
    this.placePiece(new Bishop('Black', 'assets/BlackBishop.png', 'bishop'), [0, 5]);
    this.placePiece(new King('Black', 'assets/KingOfSpades.png', 'king'), [0, 4]);
    this.placePiece(new Cannon('Black', 'assets/BlackCannon.png', 'cannon'), [0, 3]);

    for (let i = 0; i < 8; i++) {
      this.placePiece(new Checkers('White', 'assets/redcircle.png', 'checker-piece'), [6, i]);
    }

    this.placePiece(new Knight('White', 'assets/RedKnight.png', 'knight'), [7, 1]);
    this.placePiece(new Knight('White', 'assets/RedKnight.png', 'knight'), [7, 6]);
    this.placePiece(new Rook('White', 'assets/RedRook.png', 'rook'), [7, 0]);
    this.placePiece(new Rook('White', 'assets/RedRook.png', 'rook'), [7, 7]);
    this.placePiece(new Bishop('White', 'assets/RedBishop2.png', 'bishop'), [7, 2]);
    this.placePiece(new Bishop('White', 'assets/RedBishop2.png', 'bishop'), [7, 5]);
    this.placePiece(new King('White', 'assets/kingOfHearts.png', 'king'), [7, 4]);
    this.placePiece(new Cannon('White', 'assets/RedCannon2.png', 'cannon'), [7, 3]);


  }

  getPossibleBishopMoves(pos) {
    let possible = [];
    let temp = [];

    for (let i = 0; i < pos.length; i++) {
      temp.push(pos[i]);
    }
    
    let it1 = temp[0];
    let it2 = temp[1];

    while (it1 >= 0 && it2 < 8) {
      
      
      if (this.getPiece([it1, it2]) === null && it1 != pos[0]) {
        possible.push([it1, it2]);
      }

      it1 -= 1;
      it2 += 1;
    }

    
    let it3 = temp[0];
    let it4 = temp[1];

    while (it3 < 8 && it4 < 8) {
      
      if (this.getPiece([it3, it4]) === null && [it3] != pos[0]) {
        possible.push([it3, it4]);
      }

      it3 += 1;
      it4 += 1;
    }

    let it5 = temp[0];
    let it6 = temp[1];

    while (it5 >= 0 && it6 >= 0) {
      
      if (this.getPiece([it5, it6]) === null && [it5] != pos[0]) {
        possible.push([it5, it6]);
      }

      it5 -= 1;
      it6 -= 1;
    }

    let it7 = temp[0];
    let it8 = temp[1];

    while (it7 < 8 && it8 >= 0) {
      
      if (this.getPiece([it7, it8]) === null && [it7] != pos[0]) {
        possible.push([it7, it8]);
      }

      it7 += 1;
      it8 -= 1;
    }

    return possible;

  }

  getPossibleRookMoves(pos) {
    let possible = [];

    let it1 = pos[0];

    while (it1 < 8) {
      if (this.getPiece([it1, pos[1]]) === null && it1 !== pos[0]) {
        possible.push([it1, pos[1]]);
      }
      it1 += 1;
    }

    let it2 = pos[0];

    while (it2 >= 0) {
      if (this.getPiece([it2, pos[1]]) === null && it2 !== pos[0]) {
        possible.push([it2, pos[1]]);
      }
      it2 -= 1;
    }

    let it3 = pos[1];

    while (it3 < 8) {
      if (this.getPiece([pos[0], it3]) === null && it3 !== pos[1]) {
        possible.push([pos[0], it3]);
      }
      it3 += 1
    }

    let it4 = pos[1];

    while (it4 >= 0) {
      if (this.getPiece([pos[0], it4]) === null && it4 !== pos[1]) {
        possible.push([pos[0], it4]);
      }
      it4 -= 1
    }


    return possible;

  }

  getPossibleKnightMoves(pos) {
    let possible = [];

    let it1 = pos[0];
    let it2 = pos[1];

    //pos[0] - 2 pos[1] + 1
    //pos[0] - 2 pos[1] - 1

    if (this.getPiece([it1 - 2, it2 + 1]) !== undefined) {
      possible.push([it1 - 2, it2 + 1]);
    }

    if (this.getPiece([it1 - 2, it2 - 1]) !== undefined) {
      possible.push([it1 - 2, it2 - 1]);
    }
    
    //pos[0] + 2 pos[1] + 1
    //pos[0] + 2 pos[1] - 1

    if (this.getPiece([it1 + 2, it2 + 1]) !== undefined) {
      possible.push([it1 + 2, it2 + 1]);
    }

    if (this.getPiece([it1 + 2, it2 - 1]) !== undefined) {
      possible.push([it1 + 2, it2 - 1]);
    }

    //pos[1] - 2 pos[0] + 1
    //pos[1] - 2 pos[0] - 1

    if (this.getPiece([it2 - 2, it1 + 1]) !== undefined) {
      possible.push([it2 - 2, it1 + 1]);
    }

    if (this.getPiece([it2 - 2, it1 - 1]) !== undefined) {
      possible.push([it2 - 2, it1 - 1]);
    }

    //pos[1] + 2 pos[0] + 1
    //pos[1] + 2 pos[0] - 1

    if (this.getPiece([it2 + 2, it1 + 1]) !== undefined) {
      possible.push([it2 + 2, it1 + 1]);
    }

    if (this.getPiece([it2 + 2, it1 - 1]) !== undefined) {
      possible.push([it2 + 2, it1 - 1]);
    }

    return possible;
  }





  getPiece(pos) {
    // if  (this.grid[pos[0]][pos[1]] !== undefined) {
      if (pos[0] > 7 || pos[0] < 0 || pos[1] > 7 || pos[1] < 0) {
        return undefined;
      }
      return this.grid[pos[0]][pos[1]];
    // }
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
// console.log(sup.getPossibleBishopMoves([4, 3]));
console.log(sup.getPossibleRookMoves([4, 3]));
console.log(sup.getPossibleKnightMoves([6, 3]));
// console.log(sup.getPiece([9, 9]))

Board.marks = ['x', 'o'];

module.exports = Board;


