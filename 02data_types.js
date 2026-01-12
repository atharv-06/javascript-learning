"use strict" //treat all JS code as newer version

//alert(3+3) //the alert use only the web browser console nut node run easily
//make code readable clean and structured

// console.log(3+3)
// console.log("Atharv")

//primitive data types⬇️

// let age = 18 //number data types
// console.log(age)

// let big = 12345678901234567890      //bigInt data type
// console.log(big)

// let name="Atharv"   //string data types
// console.log(name)

// let isLoggedIn = true      //bollen data types
// console.log(isLoggedIn)

// let user = null             //null data type
// console.log(user)
// console.log(typeof(null))   //tyep of null is object

// let id = Symbol("id")
// console.log(id)

//Non primitive data types⬇️

//1 object

const student = {
    name : "Atharv",
    department: "computer"
}
console.log("the object example",student)

//2 array

let number =[1,2,3,4,5,6,7,8,9,0]
console.log("the array example",number)


//3.function

function greet(){
    console.log("hello")
}
greet()
