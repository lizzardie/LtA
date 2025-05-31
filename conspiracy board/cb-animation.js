var wren = document.getElementById("wrenMove");
var squares = document.querySelectorAll(".square");
console.log(wren);
console.log(squares);






/*
// it's not working,,, screams and pounds fists ig
// idk, i'll come back to this tomorrow or smthng

anime.createDraggable();
anime.animate();
anime.createTimeline();
anime.createTimer();
// ...other methods

const $dragbox = document.querySelectorAll('.art-mini');
const $board = document.getElementById('entireboard');

anime.createDraggable($dragbox, {
    container: $board,             
    containerPadding: 10,
    releaseStiffness: 40,
});

let startX = 0, startY = 0, newX = 0, newY = 0;

var dragbox1 = document.getElementById('drag-box1');

dragbox1.addEventListener('mousedown', mouseDown);

function mouseDown(e){
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e){
  newX = startX - e.clientX;
  newY = startY = e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  dragbox1.style.top = startY + 'px';
  dragbox1.style.left = startX + 'px';

  console.log({newX, newY});
  console.log({startX, startY});

}

function mouseUp(e){

}

src="anime.esm.js"
import {createDraggable, anime} from 'anime.esm.js';

var dragbox = document.querySelector(".note");
var control = document.getElementById("controlPT");

createDraggable(dragbox,{
  x: true,
  y: true,
  container: ".entire-board",
  containerPadding: 10,
  containerFriction: 1,
  releaseStiffness: 40,
  releaseEase: "out(3)"
})

import {createDraggable} from 'anime.esm.js';

const $dragbox = document.querySelectorAll('.drag-box')
const $board = document.querySelector('.entire-board')

createDraggable($dragbox, {
    container: $board,             
    containerPadding: 10,
    releaseStiffness: 40,
});


 reg js
$(document).ready(function() {
  $(".dragBox").draggable();
});
*/