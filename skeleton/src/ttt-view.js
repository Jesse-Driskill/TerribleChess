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
      let tempPos = this.game.board.getPiece([Math.floor(i / 8), (i % 8)]);
      cells[i].classList.add("droppable");
      if (tempPos !== null) {
        let imgEle = document.createElement("img");
        imgEle.setAttribute('src', `${tempPos.img}`);
        imgEle.setAttribute('draggable', "true"); 
        imgEle.setAttribute('class', `${tempPos.color} ${tempPos.id} draggable`)

        cells[cells.length - 1].appendChild(imgEle);
      }
      cells[i].setAttribute('id', `${i}`);

      if ((Math.floor(i / 8) + (i % 8)) % 2 !== 0) {
        cells[i].classList.add('light-brown');
      }
      else {
        cells[i].classList.add('brown');
      }
    }

    // let draggable10 = document.querySelector(".White");
    // let droppable10 = document.querySelector('.droppable');
    // console.log(draggable10);
    // for (let i = 0; i < draggable10.length; i++) {
    //   let ele = draggable10[i];
    //   if (ele !== null) {
    //     draggable10[i].addEventListener("dragstart", dragStart);
    //   }
    // }

    // draggable10.forEach((ele) => {
    //   ele.addEventListener("dragstart", dragStart);
    // });

    // droppable10.forEach((ele) => {
    //   ele.addEventListener("dragover", dragOver);
    //   ele.addEventListener("drop", drop);
    // });

    function dragStart(event) {
      console.log('hello');
    }
    
    let pos = [];

    // cells[0].append('♔');
    // cells[1].append('♚');
    
    for (let i = 0; i < cells.length; i++) {
      
      
      containerUl.appendChild(cells[i]);
      

      cells[i].addEventListener('click', () => {

        pos[0] = Math.floor(i / 8);
        pos[1] = i % 8;

        if (this.game.board.isEmptyPos(pos)){
          cells[i].append(this.game.currentPlayer);
          cells[i].setAttribute('class', `${this.game.currentPlayer}`);
          
          this.game.playMove(pos);

          if (this.game.board.winner() != null) {
            setTimeout( () => {alert(`Congratulations ${this.game.winner()}, you won!`)}, 2);

            for (let i = 0; i < cells.length; i++) {
              cells[i].setAttribute('id', 'foo');
            }

          }

        } 
        else {
          
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