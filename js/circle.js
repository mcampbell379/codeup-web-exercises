(function() {
    "use strict";

    // create a circle object
    const circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * (this.radius ** 2); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let area;
            if (doRounding === true){
                area = Math.round(this.getArea());
            } else {
                area = this.getArea();
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    //e.g., roundFloat(3.14159, 3) -> 3.142
    // function roundFloat(floatNum, decimalDigit){
    //      1. multiply floatnum by 10 ^ of decimalDigit
    //      2. call math.round on floatNum
    //      3. divide floatNum by 10 ^ of decimalDigit
    // }
})();
