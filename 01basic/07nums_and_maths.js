let score = 200;
console.log(score)

let balance = new Number(1000)
console.log(balance)

// console.log(balance.toString().length)      //tostring in convert number to string and .length is used to return the number of characters in the string
// console.log(typeof(balance.toString()))     //string
// console.log(balance.toFixed(1));             //Formats the number to 1 digit after the decimal point.

// const otherNumber =123.4567
// console.log(otherNumber.toPrecision(4));        //

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));      //10,00,000

//================== Maths ====================================================================================================

console.log(Math)
console.log(Math.abs(-5));              //give returns absolute value -5=> 5
console.log(Math.round(4.55))           //5
console.log(Math.ceil(4.2))             //get point of upper value means 4.2 absolute value get 5
console.log(Math.floor(4.9))            //it gives the lower value if the write 4.9 it gives the 4
console.log(Math.min(4,3,9,7,2))        //it returns the Minimum value = 2
console.log(Math.max(4,3,9,7,2))        //it gives the highest value in list = 9


console.log(Math.random())              //it gives the random value between 0 to 1
console.log(Math.random()*10 +1)        //generate random number one after decimal number e.g 1.087 etc

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)      //t gives a random whole number between min and max (both included).
