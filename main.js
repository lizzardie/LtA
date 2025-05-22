var d4Total = 0;
var d6Total = 0;
var d8Total = 0;
var d10Total = 0;
var d12Total = 0;
var d20Total = 0;

var allDice = document.querySelector(".dice-container");

function rollDice(){
    var diceToRoll = allDice.querySelectorAll(".d20-body, .d12-body, .d10-body, .d8-body, .d6, .d4");
    /* note to future self for when i forget: random with just * 4 would return a number between 0 and 3, so the plus 1 bumps it up from 0 to 1  */
    
    diceToRoll.forEach((dieToRoll) => {
        if (dieToRoll.className.includes("d20-body")) {
            d20Total = Math.floor(Math.random() * 20 + 1);
            dieToRoll.querySelector(".d20Numbers").textContent = d20Total;
        }
        if (dieToRoll.className.includes("d12-body")){
            d12Total = Math.floor(Math.random() * 12 + 1);
            dieToRoll.querySelector(".d12Numbers").textContent = d12Total;
        }
        if (dieToRoll.className.includes("d10-body")){
            d10Total = Math.floor(Math.random() * 10 + 1);
            dieToRoll.querySelector(".d10Numbers").textContent = d10Total;
        }
        if (dieToRoll.className.includes("d8-body")){
            d8Total = Math.floor(Math.random() * 8 + 1);
            dieToRoll.querySelector(".d8Numbers").textContent = d8Total;
        }
        if (dieToRoll.className.includes("d6")){
            d6Total = Math.floor(Math.random() * 6 + 1);
            dieToRoll.querySelector(".d6Numbers").textContent = d6Total;
        }
        if (dieToRoll.className.includes("d4")){
            d4Total = Math.floor(Math.random() * 4 + 1);
            dieToRoll.querySelector(".d4Numbers").textContent = d4Total;
        }
    })
};

function d4Spawn(){
    d4Div = document.createElement("div");
    d4Div.className = "d4";

    d4Number = document.createElement("p");
    d4Number.textContent = "4";
    d4Number.className = "numbers d4Numbers";

    document.getElementById("dice-container-id").append(d4Div);
    d4Div.append(d4Number);
}

function d6Spawn(){
    d6Div = document.createElement("div");
    d6Div.className = "d6";

    d6Number = document.createElement("p");
    d6Number.textContent = "6";
    d6Number.className = "numbers d6Numbers"

    document.getElementById("dice-container-id").append(d6Div);
    d6Div.append(d6Number);
}

function d8Spawn(){
    d8BodyDiv = document.createElement("div");
    d8BodyDiv.className = "d8-body";

    d8FaceDiv = document.createElement("div");
    d8FaceDiv.className = "d8-face";

    d8Number = document.createElement("p");
    d8Number.textContent = "8";
    d8Number.className = "numbers d8Numbers";

    document.getElementById("dice-container-id").append(d8BodyDiv);
    d8FaceDiv.append(d8Number);
    d8BodyDiv.append(d8FaceDiv);
}

function d10Spawn(){
    d10BodyDiv = document.createElement("div");
    d10BodyDiv.className = "d10-body";

    d10FaceDiv = document.createElement("div");
    d10FaceDiv.className = "d10-face";

    d10Number = document.createElement("p");
    d10Number.textContent = "10";
    d10Number.className = "numbers d10Numbers";

    document.getElementById("dice-container-id").append(d10BodyDiv);
    d10FaceDiv.append(d10Number);
    d10BodyDiv.append(d10FaceDiv);
}

function d12Spawn(){
    d12BodyDiv = document.createElement("div");
    d12BodyDiv.className = "d12-body";

    d12FaceDiv = document.createElement("div");
    d12FaceDiv.className = "d12-face";

    d12Number = document.createElement("p");
    d12Number.textContent = "12";
    d12Number.className = "numbers d12Numbers";

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



/* OLD STUFFS

  d4Total = Math.floor(Math.random() * 4 + 1);
    d6Total = Math.floor(Math.random() * 6 + 1);
    d8Total = Math.floor(Math.random() * 8 + 1);
    d10Total = Math.floor(Math.random() * 10 + 1);
    d12Total = Math.floor(Math.random() * 12 + 1);
    d20Total = Math.floor(Math.random() * 20 + 1);
    
    document.querySelector(".d4 .numbers").textContent = d4Total;
    document.querySelector(".d6 .numbers").textContent = d6Total;
    document.querySelector(".d8-body .numbers").textContent = d8Total;
    document.querySelector(".d10-body .numbers").textContent = d10Total;
    document.querySelector(".d12-body .numbers").textContent = d12Total;


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
    for every kind of die and just letting it find which one through its parent class 



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