"use strict";

let num = 2;
while(num < 65536){
    num*=2;
    console.log(num);
}

let coneStock = Math.floor(Math.random() * (100 - 50) + 50);

do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if(conesBought <= coneStock) {
        console.log(`Customer bought ${conesBought} cones.`);
        coneStock -= conesBought;
        console.log(`Cones left: ${coneStock}`);
        if(coneStock === 0){
            console.log(`Yay I sold them all!`);
        }
    } else {
        console.log(`Cannot sell ${conesBought} I only have ${coneStock} left.`);
    }
} while(coneStock > 0)