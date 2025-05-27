let startX = 0, startY = 0, newX = 0, newY = 0;

var dragbox = document.getElementById('drag-box');

dragbox.addEventListener('mousedown', mouseDown);

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

  dragbox.style.top = startY + 'px';
  dragbox.style.left = startX + 'px';

  console.log({newX, newY});
  console.log({startX, startY});

}

function mouseUp(e){

}

/*
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