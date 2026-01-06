const price=999.00
//price=99.00         //can't reassign the value

let age =28                 //can reassign the value
let FirstName = "Atharv"
FirstName = "Tejas"
let accountEmail="abc@gmail.com"

console.log(price)
console.log(age)
console.log (FirstName)
console.log(accountEmail)

//alternative way to print all in one line

console.table([price,age,FirstName, accountEmail])

//does not use var because the functional and block scope