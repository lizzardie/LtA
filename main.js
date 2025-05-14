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



/*button.addEventListener("click", function(){
     let targ = document.querySelector(".target");
     let newItem = document.createElement("div");
     newItem.classList.add(".d20");
     targ.appendChild(newItem);
}); 
this is code from prof abram abt the add new dice javascript, gonna try to learn how to do it from a site first too
so that i actually understand why its working */