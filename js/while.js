"use strict";

let num = 2;
while(num < 65536){
    num*=2;
    console.log(num);
}

//establishes number of cones available to sell
let coneStock = Math.floor(Math.random() * (100 - 50) + 50);

do {
    //determines the number of cones bought by individual customer
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if(conesBought <= coneStock) {
        console.log(`Customer bought ${conesBought} cones.`);
        coneStock -= conesBought;
        console.log(`Cones left: ${coneStock}`);
        //when stock is empty
        if(coneStock === 0){
            console.log(`Yay I sold them all!`);
        }
    } else {
        //cannot sell more cones than whats left in stock
        console.log(`Cannot sell ${conesBought} I only have ${coneStock} left.`);
    }
} while(coneStock > 0);