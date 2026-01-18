/*they divide into two parts( the types are made basis of data types accessing in memory, by value and by method)
    1.Primitive
    7types: string, number, boolean, null, undefined, symbol, bigint
    
    2.non primitive(reference type)
    array, objets, functions
*/

//1 primitive

const firstName = "Atharv"
const score = 200

const isLoggedIn = false;
const outsideTemp=null

let userEmail

const id = Symbol('1234')
const anotherid = Symbol('1234') 

console.log(id === anotherid)

const bigInt = 1037219436n


//2 non primitive
//array
const fruits = ["banana", "apple", "orange"]

//object
let obj = {
    name:"ram",
    age: 22,
}

//function

const myfunction = function(){
    console.log("Hello World");
}
// know data type

console.log(typeof bigInt);
console.log(typeof myfunction);




//======================================================================================================//
//memory management is primarily automatic, handled by the JavaScript engine through a process called garbage collection
//JavaScript engines (like V8 in Chrome and Node.js) use two primary memory areas to store data: 
//1.Stact(primitive)
//2.heap(non-primitive)
