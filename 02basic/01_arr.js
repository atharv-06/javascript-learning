//array
let myArr = [1,2,3,4,5,6,7,8,9,0]
// console.log("Original array ", myArr)
// let superheroes = ["Thor","Iron Man","Hulk","Caption America", "Dr.Strange","Spider Man"]
// console.log(superheroes)
// console.log(typeof myArr)                object
// console.log(typeof superheroes)          object

// let myArr2 = new Array(1,2,3,4,5,6,7,8,9,0)
// console.log(myArr2)
// console.log(typeof myArr2)                 //object

// console.log(myArr[4])                       //it returns element at index 4


//array methods
// console.log(myArr.length)                   //it returns the length of array
// myArr.push(10)                              //adds the element at the end
// console.log(myArr)
// myArr.pop()                                 //remove the element at the last index
// console.log(myArr)
// myArr.unshift(10)                              //add the starting of element
// console.log(myArr)
// myArr.shift()
// console.log(myArr)                             //remove the starting element

// console.log(myArr.includes(6))                 //it tells the element exists in array and return the true false value
// console.log(myArr.indexOf(3))                  //it gives the index of element

const newarr = myArr.join()                     // CONVERT into string 1,2,3,4,5,6,7,8,9,0
// console.log(myArr)
// console.log(newarr)

//slice and splice

console.log("A", myArr)

let myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

let myn2 = myArr.splice(1, 3)
console.log("C", myArr)
console.log(myn2)

//the splice manipulate the original array rather than slice gives return the value