"use strict";

let deckOfCards = new Array(52);

function fillDeck (deck){
    for(let i = 0; i < deck.length; i++){
        //individual cards being added
        deck[i] = {
           suit: Math.floor(Math.random() * (5 - 1) + 1),
           rank: Math.floor(Math.random() * (11 - 1) + 1)
        };
    }

    return deck;
}

function pullTopCard (deck){
    return deck[0];

}

function discardTopCard (deck){
    deck.shift();
    deckOfCards = deck;
    return deck;
}

//testing
/*fillDeck(deckOfCards);
console.log(deckOfCards)
console.log(pullTopCard(deckOfCards));
console.log(discardTopCard(deckOfCards));*/


