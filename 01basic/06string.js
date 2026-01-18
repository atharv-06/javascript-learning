// string Declaration
let firstName="atharv";
let city = 'Pune';
let message =`learning the string declaration`
console.log(`the firstname is ${firstName} and the city is ${city} and say it ${message}`);     // most most use backticks

let name = new String('Atharv')
console.log(name)

//string properties and methods

let str = "JavaScript is programming language     ";
console.log(str.length);                        //give the length of stri
console.log(str.toUpperCase())                  //all character in string is make Uppercase
console.log(str.toLowerCase())                  //all character in string is make lowercase
console.log(str.includes("Script"))             //chack the word is in string give true false answer
console.log(str.indexOf("S"))                   //give the index of character
console.log(str[9])                             //give the character at index 9
console.log(str.slice(0 , 4))                   //extract the text 0 to 04 between
console.log(str.replace("is", "a"))               //replace the is to a
console.log(str.trim())                         //remove the unwanted spaces

//concatinate the string

let firstString = "Hello";
let secondString = "Ganesh";

console.log(`The Ram Say ${firstString} to the his friend ${secondString}`);

//string to array

let data = "a, b, c, d, e"
let arr = data.split(",")
console.log(arr)



