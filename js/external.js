"use strict";

console.log(`Hello from external JavaScript`)

alert(`Welcome to my website!`)

const favColor = prompt(`What is your favorite color?`)
alert(`${favColor} is my favorite color too!`)

//datatype exercise: 3

const mermaidDays = Number(prompt(`How long are you renting The Little Mermaid?`))
const bearDays = Number(prompt(`How long are you renting Brother Bear?`))
const herculesDays = Number(prompt(`How long are you renting Hercules?`))
const pricePerDay = Number(prompt(`What is the price for each movie?`))
const totalPrice = (mermaidDays + bearDays + herculesDays) * pricePerDay

console.log(totalPrice, typeof totalPrice)
alert(`The total price is $${totalPrice}`)

