"use strict";

/*
drawRectangle(3,5);
should output:
***
* *
* *
* *
***
 */

function drawRectangle(width, height) {
    drawRectangleTop(width);
    drawRectangleMiddle(width, height);
    drawRectangleTop(width);
}

function drawRectangleTop(width){
    let output = ""
    for (let i = 0; i < width; i++) {
        output += "*"
    }
    console.log(output);
}
function drawRectangleMiddle(width, height){
    // loop prints middle line "height" amount of times
    for (let i = 0; i < height - 2; i++) {
        let output = ""
        for (let i = 0; i < width; i++) {
            if (i === 0 || i === (width - 1)) {
                output += "*";
            } else {
                output += " ";
            }
        }
        console.log(output);
    }
}

drawRectangle(3,5);