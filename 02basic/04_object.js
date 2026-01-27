//object creation using the new() object constructor

// const tinderUser = new Object()
const tinderUser ={}                    //const tinderUser = new Object(), const tinderUser ={} both are the same object declaration
tinderUser.id = 101,
tinderUser.name = "ganesh"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

//object inside object

const regularUser ={
    email:"some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Atharv",
            lastname: "Lokhande"
        }
    }
}

// console.log(regularUser.fullName)
//concatinate two objects

let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"c", 4:"d"}

// let obj3 = Object.assign({}, obj1, obj2)      //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//also using the spread operator
let obj3 ={...obj1, ...obj2}        //mostly use this method { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))            // it returns the keys  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))          // it returns the value [ 101, 'ganesh', false ]
// console.log(Object.entries(tinderUser))         // it returns both keys and values [ [ 'id', 101 ], [ 'name', 'ganesh' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));           //it checks the present or not and return the value => true


//object deconstructing 

const user = {
    name: "Atharv",
    age: 21,
    city: "Pune"
}
// const name = user.name
// console.log(name)               //normal way to accesing the value

const {name,age} = user;
console.log(name,age) 

//rename the objectdestructuring
const {name:Username, age:Userage} = user;
console.log(Username)
console.log(age)

//JSON API
// {
//     "name": "Atharv",
//     "city": "Pune",
//     "age": "29"
// }