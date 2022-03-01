const Game = require('/ttt_node/game.js');


class View {
  constructor(game, el) {
    this.game = game;
    this.setupBoard();
    this.el = el;
  }

  setupBoard() {
  const container = document.getElementById('ttt');
  const containerUl = document.createElement("ul");
  container.appendChild(containerUl);

    let cells = [];

    for (let i = 0; i < 64; i++) {
      cells.push(document.createElement("li"));
    }
    
    let pos = [];
    
    for (let i = 0; i < cells.length; i++) {
      
      containerUl.appendChild(cells[i]);
      cells[i].addEventListener('click', () => {

        pos[0] = Math.floor(i / 8);
        pos[1] = i % 8;

        if (this.game.board.isEmptyPos(pos)){
          cells[i].append(this.game.currentPlayer);
          cells[i].setAttribute('class', `${this.game.currentPlayer}`);
          cells[i].setAttribute('draggable', 'true');
          this.game.playMove(pos);

          if (this.game.board.winner() != null) {
            setTimeout( () => {alert(`Congratulations ${this.game.winner()}, you won!`)}, 2);
            // this.preventDefault();
            // e.stopPropagation();

            // for (cell of cells) {
            //   cell.setAttribute('class', 'foo');
            // }

            for (let i = 0; i < cells.length; i++) {
              cells[i].setAttribute('id', 'foo');
            }

          }

        } else {
          alert('Move is invalid!');
        }
      });
    }
  }
  

}




module.exports = View;












// const markAsDone = (e) => {
//   e.preventDefault();

//   let ele = e.target // the thing that triggered the event/the thing that we are listening for

//   ele.classList.toggle('done') // toggle on or toggle off
// }

// // add event listener to cross out a list item
// groceries.addEventListener('click', markAsDone);