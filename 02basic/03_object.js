//singleton

//object literls

let JsUser = {
    firstName: "Atharv",
    rollno: 122,
    email: "atharv@gmail.com"
,   age:19,
    city: "Pune",
    isPresent: true
}
console.log(JsUser)

console.log(JsUser.firstName)               //to accessing the element in object
console.log(JsUser.email)
//another way to access element in objects

console.log(JsUser["email"])

//to declare structure

const mySym = Symbol("key1")

let User ={
    name:"Tejas",
    rollno: 17,
    email:"tejas@gmail.com",
    [mySym]: "myKey1"
}

console.log(User[mySym])              //accessing the symbol

// also like that write the function 

JsUser.greeting = function(){
    console.log(`my name is, ${this.firstName}`)
}
console.log(JsUser.greeting())

//object in functions

const Juser ={
    FirstName: "Atharv",
    greet: function(){
        return "Hello," + this.FirstName
        //return `hello, ${this.FirstName}                  also like write 
    }
}
console.log(Juser.greet())