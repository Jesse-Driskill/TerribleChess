/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const View = __webpack_require__(/*! ./ttt-view */ \"./src/ttt-view.js\");\nconst Game = __webpack_require__(/*! ../../../../../../../../../ttt_node/game.js */ \"./ttt_node/game.js\"); //Not sure idk lol\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // Your code here\n\n\n  let game = new Game();\n  // game.run();\n  let ele = document.getElementById('ttt');\n  new View(game, ele);\n\n  let draggable10 = document.querySelectorAll('.draggable');\n  console.log(draggable10);\n\n\n  let droppable10 = document.querySelectorAll('.droppable');\n  console.log(droppable10);\n  for (let i = 0; i < draggable10.length; i++) {\n    let ele = draggable10[i];\n    if (ele !== null) {\n      draggable10[i].addEventListener(\"dragstart\", dragStart);\n    }\n  }\n\n  function dragStart(event) {\n    \n  }\n\n  \n  // draggable10.forEach((ele) => {\n  //   ele.addEventListener(\"dragstart\", dragStart);\n  // });\n  // droppable10.forEach((ele) => {\n  //   ele.addEventListener(\"dragover\", dragOver);\n  //   ele.addEventListener(\"drop\", drop);\n  // });\n\n  function dragOver(event) {\n    event.preventDefault();\n  }\n\n  function drop(event) {\n    event.preventDefault();\n  }\n});\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ../../../../../../../../../ttt_node/game.js */ \"./ttt_node/game.js\");\n\n\nclass View {\n  constructor(game, el) {\n    this.game = game;\n    this.setupBoard();\n    this.el = el;\n  }\n\n  setupBoard() {\n  const container = document.getElementById('ttt');\n  const containerUl = document.createElement(\"ul\");\n  container.appendChild(containerUl);\n\n    let cells = [];\n\n    for (let i = 0; i < 64; i++) {\n      cells.push(document.createElement(\"li\"));\n      let tempPos = this.game.board.getPiece([Math.floor(i / 8), (i % 8)]);\n      cells[i].classList.add(\"droppable\");\n      if (tempPos !== null) {\n        let imgEle = document.createElement(\"img\");\n        imgEle.setAttribute('src', `${tempPos.img}`);\n        imgEle.setAttribute('draggable', \"true\"); \n        imgEle.setAttribute('class', `${tempPos.color} ${tempPos.id} draggable`)\n\n        cells[cells.length - 1].appendChild(imgEle);\n      }\n      cells[i].setAttribute('id', `${i}`);\n\n      if ((Math.floor(i / 8) + (i % 8)) % 2 !== 0) {\n        cells[i].classList.add('light-brown');\n      }\n      else {\n        cells[i].classList.add('brown');\n      }\n    }\n\n    // let draggable10 = document.querySelector(\".White\");\n    // let droppable10 = document.querySelector('.droppable');\n    // console.log(draggable10);\n    // for (let i = 0; i < draggable10.length; i++) {\n    //   let ele = draggable10[i];\n    //   if (ele !== null) {\n    //     draggable10[i].addEventListener(\"dragstart\", dragStart);\n    //   }\n    // }\n\n    // draggable10.forEach((ele) => {\n    //   ele.addEventListener(\"dragstart\", dragStart);\n    // });\n\n    // droppable10.forEach((ele) => {\n    //   ele.addEventListener(\"dragover\", dragOver);\n    //   ele.addEventListener(\"drop\", drop);\n    // });\n\n    function dragStart(event) {\n      console.log('hello');\n    }\n    \n    let pos = [];\n\n    // cells[0].append('♔');\n    // cells[1].append('♚');\n    \n    for (let i = 0; i < cells.length; i++) {\n      \n      \n      containerUl.appendChild(cells[i]);\n      \n\n      cells[i].addEventListener('click', () => {\n\n        pos[0] = Math.floor(i / 8);\n        pos[1] = i % 8;\n\n        if (this.game.board.isEmptyPos(pos)){\n          cells[i].append(this.game.currentPlayer);\n          cells[i].setAttribute('class', `${this.game.currentPlayer}`);\n          \n          this.game.playMove(pos);\n\n          if (this.game.board.winner() != null) {\n            setTimeout( () => {alert(`Congratulations ${this.game.winner()}, you won!`)}, 2);\n\n            for (let i = 0; i < cells.length; i++) {\n              cells[i].setAttribute('id', 'foo');\n            }\n\n          }\n\n        } \n        else {\n          \n        }\n      });\n    }\n  }\n  \n\n}\n\n\n\n\nmodule.exports = View;\n\n\n\n\n\n\n\n\n\n\n\n\n// const markAsDone = (e) => {\n//   e.preventDefault();\n\n//   let ele = e.target // the thing that triggered the event/the thing that we are listening for\n\n//   ele.classList.toggle('done') // toggle on or toggle off\n// }\n\n// // add event listener to cross out a list item\n// groceries.addEventListener('click', markAsDone);\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_node/board.js":
/*!***************************!*\
  !*** ./ttt_node/board.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\n\nclass Piece {\n  constructor(color, img, id) {\n      this.color = color;\n      this.img = img;\n      this.id = id;\n  }\n}\n\n\nclass Checkers extends Piece {\n\n\n}\n\nclass Knight extends Piece {\n\n}\n\nclass Rook extends Piece {\n\n}\n\nclass King extends Piece {\n\n}\n\nclass Cannon extends Piece {\n\n}\n\nclass Bishop extends Piece {\n\n}\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n\n\n    // for (let i = 0; i < 8; i++) {\n    //   this.grid.push([]);\n    // }\n\n    for (let i = 0; i < 8; i++) {\n      this.placePiece(new Checkers('Black', 'assets/blackcircle.png', 'checker-piece'), [1, i]);\n    }\n\n    this.placePiece(new Knight('Black', 'assets/BlackKnight.png', 'knight'), [0, 1]);\n    this.placePiece(new Knight('Black', 'assets/BlackKnight.png', 'knight'), [0, 6]);\n    this.placePiece(new Rook('Black', 'assets/BlackRook.png', 'rook'), [0, 0]);\n    this.placePiece(new Rook('Black', 'assets/BlackRook.png', 'rook'), [0, 7]);\n    this.placePiece(new Bishop('Black', 'assets/BlackBishop.png', 'bishop'), [0, 2]);\n    this.placePiece(new Bishop('Black', 'assets/BlackBishop.png', 'bishop'), [0, 5]);\n    this.placePiece(new King('Black', 'assets/KingOfSpades.png', 'king'), [0, 4]);\n    this.placePiece(new Cannon('Black', 'assets/BlackCannon.png', 'cannon'), [0, 3]);\n\n    for (let i = 0; i < 8; i++) {\n      this.placePiece(new Checkers('White', 'assets/redcircle.png', 'checker-piece'), [6, i]);\n    }\n\n    this.placePiece(new Knight('White', 'assets/RedKnight.png', 'knight'), [7, 1]);\n    this.placePiece(new Knight('White', 'assets/RedKnight.png', 'knight'), [7, 6]);\n    this.placePiece(new Rook('White', 'assets/RedRook.png', 'rook'), [7, 0]);\n    this.placePiece(new Rook('White', 'assets/RedRook.png', 'rook'), [7, 7]);\n    this.placePiece(new Bishop('White', 'assets/RedBishop2.png', 'bishop'), [7, 2]);\n    this.placePiece(new Bishop('White', 'assets/RedBishop2.png', 'bishop'), [7, 5]);\n    this.placePiece(new King('White', 'assets/kingOfHearts.png', 'king'), [7, 4]);\n    this.placePiece(new Cannon('White', 'assets/RedCannon2.png', 'cannon'), [7, 3]);\n\n\n  }\n\n  getPossibleBishopMoves(pos) {\n    let possible = [];\n    let temp = [];\n\n    for (let i = 0; i < pos.length; i++) {\n      temp.push(pos[i]);\n    }\n    \n    let it1 = temp[0];\n    let it2 = temp[1];\n\n    while (it1 >= 0 && it2 < 8) {\n      \n      \n      if (this.getPiece([it1, it2]) === null && it1 != pos[0]) {\n        possible.push([it1, it2]);\n      }\n\n      it1 -= 1;\n      it2 += 1;\n    }\n\n    \n    let it3 = temp[0];\n    let it4 = temp[1];\n\n    while (it3 < 8 && it4 < 8) {\n      \n      if (this.getPiece([it3, it4]) === null && [it3] != pos[0]) {\n        possible.push([it3, it4]);\n      }\n\n      it3 += 1;\n      it4 += 1;\n    }\n\n    let it5 = temp[0];\n    let it6 = temp[1];\n\n    while (it5 >= 0 && it6 >= 0) {\n      \n      if (this.getPiece([it5, it6]) === null && [it5] != pos[0]) {\n        possible.push([it5, it6]);\n      }\n\n      it5 -= 1;\n      it6 -= 1;\n    }\n\n    let it7 = temp[0];\n    let it8 = temp[1];\n\n    while (it7 < 8 && it8 >= 0) {\n      \n      if (this.getPiece([it7, it8]) === null && [it7] != pos[0]) {\n        possible.push([it7, it8]);\n      }\n\n      it7 += 1;\n      it8 -= 1;\n    }\n\n    return possible;\n\n  }\n\n  getPossibleRookMoves(pos) {\n    let possible = [];\n\n    let it1 = pos[0];\n\n    while (it1 < 8) {\n      if (this.getPiece([it1, pos[1]]) === null && it1 !== pos[0]) {\n        possible.push([it1, pos[1]]);\n      }\n      it1 += 1;\n    }\n\n    let it2 = pos[0];\n\n    while (it2 >= 0) {\n      if (this.getPiece([it2, pos[1]]) === null && it2 !== pos[0]) {\n        possible.push([it2, pos[1]]);\n      }\n      it2 -= 1;\n    }\n\n    let it3 = pos[1];\n\n    while (it3 < 8) {\n      if (this.getPiece([pos[0], it3]) === null && it3 !== pos[1]) {\n        possible.push([pos[0], it3]);\n      }\n      it3 += 1\n    }\n\n    let it4 = pos[1];\n\n    while (it4 >= 0) {\n      if (this.getPiece([pos[0], it4]) === null && it4 !== pos[1]) {\n        possible.push([pos[0], it4]);\n      }\n      it4 -= 1\n    }\n\n\n    return possible;\n\n  }\n\n  getPossibleKnightMoves(pos) {\n    let possible = [];\n\n    let it1 = pos[0];\n    let it2 = pos[1];\n\n    //pos[0] - 2 pos[1] + 1\n    //pos[0] - 2 pos[1] - 1\n\n    if (this.getPiece([it1 - 2, it2 + 1]) !== undefined) {\n      possible.push([it1 - 2, it2 + 1]);\n    }\n\n    if (this.getPiece([it1 - 2, it2 - 1]) !== undefined) {\n      possible.push([it1 - 2, it2 - 1]);\n    }\n    \n    //pos[0] + 2 pos[1] + 1\n    //pos[0] + 2 pos[1] - 1\n\n    if (this.getPiece([it1 + 2, it2 + 1]) !== undefined) {\n      possible.push([it1 + 2, it2 + 1]);\n    }\n\n    if (this.getPiece([it1 + 2, it2 - 1]) !== undefined) {\n      possible.push([it1 + 2, it2 - 1]);\n    }\n\n    //pos[1] - 2 pos[0] + 1\n    //pos[1] - 2 pos[0] - 1\n\n    if (this.getPiece([it2 - 2, it1 + 1]) !== undefined) {\n      possible.push([it2 - 2, it1 + 1]);\n    }\n\n    if (this.getPiece([it2 - 2, it1 - 1]) !== undefined) {\n      possible.push([it2 - 2, it1 - 1]);\n    }\n\n    //pos[1] + 2 pos[0] + 1\n    //pos[1] + 2 pos[0] - 1\n\n    if (this.getPiece([it2 + 2, it1 + 1]) !== undefined) {\n      possible.push([it2 + 2, it1 + 1]);\n    }\n\n    if (this.getPiece([it2 + 2, it1 - 1]) !== undefined) {\n      possible.push([it2 + 2, it1 - 1]);\n    }\n\n    return possible;\n  }\n\n\n\n\n\n  getPiece(pos) {\n    // if  (this.grid[pos[0]][pos[1]] !== undefined) {\n      if (pos[0] > 7 || pos[0] < 0 || pos[1] > 7 || pos[1] < 0) {\n        return undefined;\n      }\n      return this.grid[pos[0]][pos[1]];\n    // }\n  }\n\n  placePiece(piece, pos) {\n    this.grid[pos[0]][pos[1]] = piece;\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {\n      for (let colIdx = 0; colIdx < 8; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 8; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 8; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    if (this.winRows()) {\n      return this.winRows();\n    }\n    if (this.winCols()) {\n      return this.winCols();\n    }\n\n    return null;\n  }\n\n  winCols() {\n    for (let i = 0; i < this.grid.length; i++) {\n      let col = [];\n      for (let j = 0; j < this.grid.length; j++) {\n        col.push(this.grid[j][i])\n      }\n      let winner = col[0];\n      if (this.winRow(col)) {\n        return winner;\n      }\n    }\n\n    return false;\n  }\n\n  // winCol() {\n\n  // }\n\n  winRows() {\n    for (let i = 0; i < this.grid.length; i++) {\n      let row = this.grid[i];\n      let winner = this.grid[i][0];\n      if (this.winRow(row)) {\n        return winner;\n      }\n    }\n\n    return false;\n  }\n\n  winRow(row) {\n    for (let i = 0; i < row.length; i++) {\n      if (row[i] === null || row[i] !== row[0]) {\n        return false;\n      }\n    }\n\n    return true;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 8) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 8);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 8; i++) {\n      grid.push([]);\n      for (let j = 0; j < 8; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nlet sup = new Board();\n// console.log(sup.getPossibleBishopMoves([4, 3]));\nconsole.log(sup.getPossibleRookMoves([4, 3]));\nconsole.log(sup.getPossibleKnightMoves([6, 3]));\n// console.log(sup.getPiece([9, 9]))\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n\n\n//# sourceURL=webpack:///./ttt_node/board.js?");

/***/ }),

/***/ "./ttt_node/game.js":
/*!**************************!*\
  !*** ./ttt_node/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_node/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  movePiece(currentPos, pos) {\n    \n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n// let newGame = new Game();\n// console.log(newGame.board.grid);\n// newGame.board.placeMark([0, 0], 'X');\n// newGame.board.placeMark([0, 1], 'X');\n// newGame.board.placeMark([0, 2], 'X');\n// newGame.board.placeMark([0, 3], 'X');\n// newGame.board.placeMark([0, 4], 'X');\n// newGame.board.placeMark([0, 5], 'X');\n// newGame.board.placeMark([0, 6], 'X');\n// newGame.board.placeMark([0, 7], 'X');\n// newGame.board.print();\n// console.log(newGame.winner());\n\n//# sourceURL=webpack:///./ttt_node/game.js?");

/***/ }),

/***/ "./ttt_node/moveError.js":
/*!*******************************!*\
  !*** ./ttt_node/moveError.js ***!
  \*******************************/
/***/ ((module) => {

eval("\nconst MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack:///./ttt_node/moveError.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;