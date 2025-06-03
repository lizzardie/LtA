
/*
var note = document.getElementById("noteholder");
btnNote.onclick = () => {
  let newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.innerHTML = '<span class="close">x</span> <textarea placeholder="Write something here..." rows="10" cols="30"></textarea>';
  newNote.style.borderColor = color.value;
  note.appendChild(newNote);
}

document.addEventListener("click", (event) => {
  console.log(event.target);
  if(event.target.classList.contains("close")){
    event.target.parentNode.remove();
  }
})
*/

// Variables and corresponding event listeners
var wren = document.getElementById("wren");
var candy = document.getElementById("candy");
var ellisra = document.getElementById("ellisra");
var joanna = document.getElementById("joanna");
var pep = document.getElementById("pep");
var reggie = document.getElementById("reggie");
var val = document.getElementById("val");

var color = document.getElementById("color");
var btnNote = document.getElementById("btnNote");
var noteDiv = document.getElementById("note");

var squares = document.querySelectorAll(".square");
var infoDisplay = document.querySelector("#info");
var occupiedImg = document.querySelectorAll(".art-mini");
var occupiedText = document.querySelectorAll(".note");
var occupied;

wren.addEventListener("drag", dragging);
wren.addEventListener("dragstart", dragStart);

candy.addEventListener("drag", dragging);
candy.addEventListener("dragstart", dragStart);

ellisra.addEventListener("drag", dragging);
ellisra.addEventListener("dragstart", dragStart);

joanna.addEventListener("drag", dragging);
joanna.addEventListener("dragstart", dragStart);

pep.addEventListener("drag", dragging);
pep.addEventListener("dragstart", dragStart);

reggie.addEventListener("drag", dragging);
reggie.addEventListener("dragstart", dragStart);

val.addEventListener("drag", dragging);
val.addEventListener("dragstart", dragStart);

noteDiv.addEventListener("drag", dragging);
noteDiv.addEventListener("dragstart", dragStart);

squares.forEach(square => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
  square.addEventListener("notice", noticeOccupied);
})

function noticeOccupied(){
  squares.forEach(square => {
    if(square.contains(".art-mini") || square.contains(".note")){
      occupied == "true";
    }
  })
}

function noteSpawn(){
  noteDiv = document.createElement("div");
  noteDiv.className = "note";
  noteDiv.id = "note";

  noteText = document.createElement("textarea");
  noteText.textContent = "Write something here";
  noteText.className = "note-text";

  noteSpan = document.createElement("span");
  noteSpan.textContent = "x";
  noteSpan.className = "close";

  document.getElementsByClassName("square white").append(noteDiv);
  noteDiv.append(noteText);
  noteDiv.append(noteSpan); 

  noteDiv.style.borderColor = color.value;
  noteDiv.setAttribute("draggable");

  noteDiv.addEventListener("drag", dragging);
  noteDiv.addEventListener("dragstart", dragStart);
}

// capture the thing being dragged specifically for the functions
let beingDragged;
// Dragging Functions
function dragging(e){
  beingDragged = e.target;
  console.log(beingDragged.id + " is being dragged");
}

function dragStart(e){
  beingDragged = e.target;
  console.log("dragging has started on" + beingDragged.id);
  infoDisplay.textContent = "you are dragging " + beingDragged.id;
}

function dragOver(e){
  console.log("you are dragging something over " + e.target.classList);
  e.preventDefault();
  /*
  squares.forEach(square => {
    if (occupied == "false"){
      console.log(occupied);
      e.preventDefault();
  }
  })
  */
}

// i think the highlights aren't working b/c the imgs fill the entire space, covering it?
function dragEnter(e){
  console.log("you are entering the space with " + e.target.classList);
  e.target.classList.add("highlight");
}

function dragLeave(e){
  console.log("you are leaving the space with " + e.target.classList);
  e.target.classList.remove("highlight");
}

function dragDrop(e){
  console.log("you have dropped " + e.target.classList);
  e.target.append(beingDragged);
  e.target.classList.remove("highlight");
}

function dragEnd(e){
  console.log("the drag of " + e.target.classList + " has ended");
  e.target.classList.add("target");
  setTimeout(() => e.target.classList.remove("target"), 100);
  infoDisplay.textContent = "";
}



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