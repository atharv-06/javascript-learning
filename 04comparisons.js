// console.log(2 > 1)          //true
// console.log(2 >= 1)         //true
// console.log(2 < 1)          //false
// console.log(2 == 1)         //false
// console.log(2 === 1)        //false
// console.log(2 != 1)         //true
// console.log(2 !== 1)        //true


// console.log("2" > 1)         //true
// console.log("02" > 1)        //true

//The reason is that as equility check  == and comparisons >, <, >=, <= work differently. comparisons convert null to number, trating it as 0 .
//  thats why (3) null >=  0 is true and (1) null > 0 is false

// avoid this comparisons and write the code readable format below code is confusion
// console.log(null > 0)            // false
// console.log(null == 0)          //false
// console.log(null >= 0)          //true


// // coosole.log(undefined == 0)      //error
// console.log(undefined > 0)          //false
// console.log(undefined < 0)          //false

//strictly check 
console.log("2" === 2)

