function noteHolderSpawn(){
  noteHolderDiv = document.createElement("div");
  noteHolderDiv.className = "note";

    d6Number = document.createElement("p");
    d6Number.textContent = "6";
    d6Number.className = "numbers d6Numbers"

    document.getElementById("dice-container-id").append(d6Div);
    d6Div.append(d6Number); // WORK ON THIS FUNCTION
    // MATCH THE WAY THE DICE FUNCTION IS USED TO SPAWN DICE
    // FOR THE NOTES
}


// Note variables and functions
var color = document.getElementById("color");
var btnNote = document.getElementById("btnNote");
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

note.addEventListener("drag", dragging);
note.addEventListener("dragstart", dragStart);

// Variables and corresponding event listeners
var wren = document.getElementById("wren");
var candy = document.getElementById("candy");
var ellisra = document.getElementById("ellisra");
var joanna = document.getElementById("joanna");
var pep = document.getElementById("pep");
var reggie = document.getElementById("reggie");
var val = document.getElementById("val");

var squares = document.querySelectorAll(".square");
var infoDisplay = document.querySelector("#info");

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

squares.forEach(square => {
  square.addEventListener("dragover", dragOver);
  square.addEventListener("dragenter", dragEnter);
  square.addEventListener("dragleave", dragLeave);
  square.addEventListener("drop", dragDrop);
  square.addEventListener("dragend", dragEnd);
})

// capture the thing being dragged specifically for the functions
let beingDragged;
// Dragging Functions
function dragging(e){
  beingDragged = e.target;
  console.log(beingDragged.id + "is being dragged");
}

function dragStart(e){
  beingDragged = e.target;
  console.log("dragging has started on" + beingDragged.id);
  infoDisplay.textContent = "you are dragging " + beingDragged.id;
}

function dragOver(e){
  console.log("you are dragging something over " + e.target.classList);
  e.preventDefault();
}

function dragEnter(e){
  console.log("you are entering the space of " + e.target.classList);
  e.target.classList.add("highlight");
}

function dragLeave(e){
  console.log("you are leaving the space of " + e.target.classList);
  e.target.classList.remove("highlight");
}

function dragDrop(e){
  console.log("you have dropped something into " + e.target.classList);
  e.target.append(beingDragged);
  e.target.classList.remove("highlight");
}

function dragEnd(e){
  console.log("the drag has ended in " + e.target.classList);
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