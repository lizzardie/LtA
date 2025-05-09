var d4Total = 0;
var d6Total = 0;
var d8Total = 0;
var d10Total = 0;
var d20Total = 0;
/* im a d12 hater soz but its a useless dice unless ur a barbarian */

function rollDice(){
    /* note to future self for when i forget: random with just * 4 would return a number between 0 and 3, so the plus 1 bumps it up from 0 to 1  */
    d4Total = Math.floor(Math.random() * 4 + 1);
    d6Total = Math.floor(Math.random() * 6 + 1);
    d20Total = Math.floor(Math.random() * 20 + 1);
    document.querySelector(".d4 .numbers").textContent = d4Total;
    document.querySelector(".d6 .numbers").textContent = d6Total; /* the space before .numbers is necessary! */
    document.querySelector(".d20-rect .numbers").textContent = d20Total;

}
/* how to assign these vars now to the divs,, */