"use strict";

let playerScore = 0;
let computerScore = 0;

let playing = false;

function mainMenu(){
    let choice = 0;
    console.log(`MAIN MENU\n\t1. Play Blackjack\n\t2. Exit game`);
    choice = prompt(`Choose 1 or 2 and press enter`);

    return choice;
}

while(playing === false){
    console.log(`Your score: ${playerScore} \tComp Score: ${computerScore}`);
    mainMenu();
}
