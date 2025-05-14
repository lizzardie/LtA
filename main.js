var d4Total = 0;
var d6Total = 0;
var d8Total = 0;
var d10Total = 0;
var d12Total = 0;
var d20Total = 0;

function rollDice(){
    /* note to future self for when i forget: random with just * 4 would return a number between 0 and 3, so the plus 1 bumps it up from 0 to 1  */
    d4Total = Math.floor(Math.random() * 4 + 1);
    d6Total = Math.floor(Math.random() * 6 + 1);
    d8Total = Math.floor(Math.random() * 8 + 1);
    d10Total = Math.floor(Math.random() * 10 + 1);
    d12Total = Math.floor(Math.random() * 12 + 1);
    d20Total = Math.floor(Math.random() * 20 + 1);
    document.querySelector(".d4 .numbers").textContent = d4Total;
    document.querySelector(".d6 .numbers").textContent = d6Total; /* the space before .numbers is necessary! */
    document.querySelector(".d8-body .numbers").textContent = d8Total;
    document.querySelector(".d10-body .numbers").textContent = d10Total;
    document.querySelector(".d12-body .numbers").textContent = d12Total;
    document.querySelector(".d20-body .numbers").textContent = d20Total;
}
/* how to assign these vars now to the divs,, */



function d20Spawn(){
    let newd20 = document.createElement("div");
    document.getElementById("dice-container-id").appendChild(newd20);
    newd20.classList.add("d20-body");
    newd20.classList.add("d20-face");
    newd20.classList.add("numbers");
}



/* USE THESE TWO IF THE ABOVE ONE ISN'T WORKING
function d20BodySpawn(){
    this.div = document.createElement("div");
    document.getElementById("dice-container-id").appendChild(this.div);
    this.div.className = "d20-body";
}

function d20FaceSpawn(){
    this.div = document.createElement("div");
    document.getElementById("dice-container-id").appendChild(this.div);
    this.div.className = "d20-face";
}
*/

/*
button.addEventListener("click", function(){
     let targ = document.querySelector(".target");     <-- is ".target" the button name?
     let newItem = document.createElement("div");      <-- naming and createElementing a new div i understand
     newItem.classList.add(".d20");
     targ.appendChild(newItem);
}); 
this is code from prof abram abt the add new dice javascript, 
gonna try to learn how to do it from this & a site
so that i actually understand why its working :)
    Update: it Does work, but the problem now is it doesn't stack the parts of one die
    together in the heirarchical way that it happens in 
*/