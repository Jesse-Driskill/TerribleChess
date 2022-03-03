const View = require('./ttt-view');
const Game = require('/ttt_node/game.js'); //Not sure idk lol

document.addEventListener("DOMContentLoaded", () => {
  // Your code here

  Array.prototype.any = function(comp) {

    for (let i = 0; i < this.length; i++) {
        let pos1 = this[i][0];
        let pos2 = this[i][1];

        if (pos1 === comp[0] && pos2 === comp[1]) {
            return true;
        }
    }
    return false;

  }

  let game = new Game();
  // game.run();
  let ele = document.getElementById('ttt');
  new View(game, ele);

  function convertToPos(num) {
    return [Math.floor(num / 8), num % 8]
  }

  function unconvert(arr) {
    return (arr[0] * 8 + arr[1])
  }

  let draggable10 = document.querySelectorAll('.draggable');
  console.log(draggable10);


  let droppable10 = document.querySelectorAll('.droppable');
  console.log(droppable10);
  for (let i = 0; i < draggable10.length; i++) {
    let ele = draggable10[i];
    if (ele !== null) {
      draggable10[i].addEventListener("dragstart", dragStart);
    }
  }

  function dragStart(event) {
    event.dataTransfer.setData("sup", event.target.id);
    let piecePos = Number([event.target.id[1]].concat(event.target.id[2]).join(""));
    let adjPiecePos = convertToPos(piecePos); 
    console.log(adjPiecePos);
    // event.dataTransfer.setData("possible-moves", game.board.getPiece(adjPiecePos).getPossibleMoves(adjPiecePos));
    // console.log(event.dataTransfer.getData("possible-moves"));
  }

  
  droppable10.forEach((ele) => {
    ele.addEventListener("dragover", dragOver);
    ele.addEventListener("drop", drop);
  });

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    
    event.preventDefault();
    
    let data = event.dataTransfer.getData("sup");
    // console.log(event.dataTransfer.getData("sup"));

    let boardPos = event.target.id;
    // console.log(boardPos);
    let piecePos = event.dataTransfer.getData("sup").replace(/\D/g, '') * 1;
    let piecePos2 = convertToPos(piecePos);


    // console.log(piecePos);
    // console.log(convertToPos(piecePos));
    
    let boardPosInt = event.target.id.replace(/\D/g, '') * 1;
    let boardPosInt2 = convertToPos(boardPosInt);
    // console.log(boardPosInt2);
  
    // console.log(boardPosInt);
    // console.log(convertToPos(boardPosInt));

    // console.log(game.board.getPiece(piecePos2));


    // console.log(game.board.getPiece(piecePos2).getPossibleMoves(piecePos2, game.board));
    let possible = game.board.getPiece(piecePos2).getPossibleMoves(piecePos2, game.board);
    console.log(possible);

    function locate(twoDArr, arr) {
      for (let i = 0; i < twoDArr.length; i++) {
        if (twoDArr[i][0] === arr[0] && twoDArr[i][1] === arr[1]) {
          return true;
        }
      }

      return false;
    }
    // console.log([document.querySelector(`#p45`), 'hello']);
    // let other = document.getElementById(`p${event.target.id}`)
    let other = event.target;
    console.log([other, 'Im other']);
    // console.log(possible);
    if (locate(possible, boardPosInt2)) {
      let piece = document.getElementById(data);
      

      


      console.log(`p${unconvert(boardPosInt2)}`);
      // console.log("O eyecoancvert");
      

      event.target.appendChild(document.getElementById(data));
      game.movePiece(piecePos2, boardPosInt2);
      piece.setAttribute('id', `p${event.target.id}`);
    }
  }
    

    
    
    
  
});


