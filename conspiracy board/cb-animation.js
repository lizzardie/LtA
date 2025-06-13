
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
/*
var hasImg = document.querySelectorAll(".art-mini");
var hasText = document.querySelectorAll(".note");
*/

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

})

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
let square = squares;
let full;

// Dragging Functions
function dragging(e){
  beingDragged = e.target;
  console.log(beingDragged.id + " is being dragged");
}

function dragStart(e){
  beingDragged = e.target;
  console.log("dragging has started on " + beingDragged.id);
  infoDisplay.textContent = "you are dragging " + beingDragged.id;
}

function dragOver(e){
  square = e.target;
  console.log("you are dragging " + beingDragged.id + " over " + square.classList);
  if (square.className.includes("full")) {
    null;
  } else {
    e.preventDefault();
  }
}

function dragEnter(e){
  square = e.target;
  console.log("you are entering the space of " + square.classList);
}

function dragLeave(e){
  square = e.target;
  console.log("you are leaving the space of " + square.classList + " with " + beingDragged.id);
  square.classList.remove("full");
}

function dragDrop(e){
  beingDragged = e.target;
  console.log("you have dropped " + e.target.classList);
  e.target.append(beingDragged);
}

function dragEnd(e){
  beingDragged = e.target;
  console.log("the drag of " + e.target.classList + " has ended in " + square.classList);
  square.classList.add("full");
  e.target.classList.add("target");
  setTimeout(() => e.target.classList.remove("target"), 100);
  infoDisplay.textContent = "";
}


/*

*/