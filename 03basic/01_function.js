//normal function (function declaration)

function greet(){
    console.log("Hello, Atharv !..")
}
greet()

//function with parameter

function add(num1, num2){
    return num1+num2
}
let result = add(3, 6)
// console.log(result)

/*rest operator - rest operator use in below example the using ... then one parameter
and pass the more than 1 argument in function then all arguments are prints in array format
(the one parameter pass and multiple argument pass then only print the first argument then use of
rest operator ... prints more than one argument)*/
function calculateCardPrice(...num1 ){
    return num1
}

console.log(calculateCardPrice(100, 200, 300)) //[ 100, 200, 300 ]

//object with functions
const user ={
    username: "atharv",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);
}
// handleObject(user)
//another method to passing
handleObject({
    username: "Ram",
    price: 299
})

//array in function

const myNewArray = [10, 20, 30, 40]

function returnSecondaryValue(getArray){
    return getArray[1]
}
// console.log(returnSecondaryValue(myNewArray))
console.log(returnSecondaryValue([200, 300, 400, 500]));