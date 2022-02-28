const View = require('./ttt-view');
const Game = require('/ttt_node/game.js'); //Not sure idk lol

document.addEventListener("DOMContentLoaded", () => {
  // Your code here


  let game = new Game();
  let ele = document.getElementById('ttt');
  new View(game, ele);
  
});


