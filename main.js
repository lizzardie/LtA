var d4Total = 0;
var d6Total = 0;
var d8Total = 0;
var d10Total = 0;
var d12Total = 0;
var d20Total = 0;


var allDice = document.querySelector(".dice-container");
var numberChange = allDice.querySelectorAll(".numbers");



function rollDice(){

    var diceToRoll = allDice.querySelectorAll(".d20-body, .d12-body, .d10-body, .d8-body, .d6, .d4");
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
    
    diceToRoll.forEach((dieToRoll) => {
        if (dieToRoll.className.includes("d20-body")) {
                d20Total = Math.floor(Math.random() * 20 + 1);
                dieToRoll.querySelector(".d20Numbers").textContent = d20Total;
        }


    })
    
};


/*

numberChange.forEach((diceToRoll) => {
        if(diceToRoll.className == "d20-body"){
            diceToRoll.textContent = d20Total;
        }
    })

(diceToRoll < ".d20-body").textContent = d20Total;


var d20ToRoll = allDice.querySelectorAll(".d20-body .numbers");

for (let i = 0; i < d20ToRoll.length; i++){
        d20ToRoll[i].textContent = d20Total;
    }



for (let i = 0; i < numberChange.length; i++){
        numberChange[i].textContent = d20Total;   ik this is wrong anyways cuz it would be turning all the numbers into d20s but why wont the rollDice function read for loops or for each functions????? 
    }

numberChange.array.forEach((diceToRoll) => {
        document.querySelectorAll(".d20-body .numbers").textContent = d20Total;
    })

add the rest of the dice in same format to this const if this method works

     use querySelectorAll to be able to roll multiple of the same die at once
    and to maybe make the above stuff more efficient by not having to write one
    for every kind of die and just letting it find which one through its parent class */ 

/* how to assign these vars now to the divs,, */

function d12Spawn(){

    d12BodyDiv = document.createElement("div");
    d12BodyDiv.className = "d12-body";

    d12FaceDiv = document.createElement("div");
    d12FaceDiv.className = "d12-face";

    d12Number = document.createElement("p");
    d12Number.textContent = "12";
    d12Number.className = "numbers";

    document.getElementById("dice-container-id").append(d12BodyDiv);
    d12FaceDiv.append(d12Number);
    d12BodyDiv.append(d12FaceDiv);
}

function d20Spawn(){

    d20BodyDiv = document.createElement("div");
    d20BodyDiv.className = "d20-body";

    d20FaceDiv = document.createElement("div");
    d20FaceDiv.className = "d20-face";

    d20Number = document.createElement("p");
    d20Number.textContent = "20";
    d20Number.className = "numbers d20Numbers";  

    document.getElementById("dice-container-id").append(d20BodyDiv);
    d20FaceDiv.append(d20Number);
    d20BodyDiv.append(d20FaceDiv);
}




/*
button.addEventListener("click", function d20Spawn(){
     let targ = document.querySelector(".dice-container");     <-- is ".target" the parent div location?
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