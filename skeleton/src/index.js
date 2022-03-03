const View = require('./ttt-view');
const Game = require('/ttt_node/game.js'); //Not sure idk lol

document.addEventListener("DOMContentLoaded", () => {
  // Your code here


  let game = new Game();
  // game.run();
  let ele = document.getElementById('ttt');
  new View(game, ele);

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
    
  }

  
  // draggable10.forEach((ele) => {
  //   ele.addEventListener("dragstart", dragStart);
  // });
  // droppable10.forEach((ele) => {
  //   ele.addEventListener("dragover", dragOver);
  //   ele.addEventListener("drop", drop);
  // });

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
  }
});


