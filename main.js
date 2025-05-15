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
    d20BodyDiv = document.createElement("div");
    document.getElementById("dice-container-id").appendChild(d20BodyDiv);
    d20BodyDiv.className = "d20-body";

    d20FaceDiv = document.createElement("div");
    document.getElementById("dice-container-id").appendChild(d20FaceDiv);
    d20FaceDiv.className = "d20-face";

    d20Number = document.createElement("p").textcontent;
    document.getElementById("dice-container-id").appendChild(d20Number);
    d20Number.className = "numbers";
    
}


/* attempt that didn't work
function d20Spawn(){
    function d20BodySpawn(){
        let newd20Body = document.createElement("div");
        document.getElementById("dice-container-id").appendChild(newd20Body);
        newd20Body.classList.add("d20-body");
    }
    function d20FaceSpawn(){
        let newd20Face = document.createElement("div");
        document.getElementById("dice-container-id").appendChild(newd20Face);
        newd20Face.classList.add("d20-face");
    }
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