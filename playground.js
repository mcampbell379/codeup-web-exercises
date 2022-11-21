//  sandbox for testing js code

// == only holds value, while === includes typeOf
console.log(`'3' == 3 is ${"3" === 3}`)
console.log("'3' === 3 is " + ("3" === 3))
console.log("'3' !== 3 is " + ("3" !== 3))
console.log(`'3' != 3 is ${"3" !== 3}`)

//var vs let and block scope

var varNum = 1;
{
    var varNum = 2;
        console.log(varNum)
}
console.log(varNum);

let letNum = 1;
{
    let  letNum = 2;
    console.log(letNum)
}
console.log(letNum);


/*should come out as an error (false statement)
if (true){
    let isolatedVar = 69;
}
console.log(isolatedVar)
*/


//should come out as "69"
if (true){
    var normalVar = 69;
}
console.log(normalVar)