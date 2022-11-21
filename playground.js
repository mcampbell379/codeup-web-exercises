//  sandbox for testing js code

// == only holds value, while === includes typeOf
console.log(`'3' == 3 is ${"3" === 3}`)
console.log("'3' === 3 is " + ("3" === 3))
console.log("'3' !== 3 is " + ("3" !== 3))
console.log(`'3' != 3 is ${"3" !== 3}`)

//variables and block scope

var num = 1;
{
    var num = 2;
        console.log(num)
}
console.log(num);

