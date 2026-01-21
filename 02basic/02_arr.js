let marval_heros = ["Thor", "IronMan", "SpiderMan"]
let dc_heros = ["Superman","flash","batman"]

// marval_heros.push(dc_heros)
// console.log(marval_heros)                            //[ 'Thor', 'IronMan', 'SpiderMan', [ 'Superman', 'flash', 'batman' ] ]

//another method the add two arrays
let all_heros = marval_heros.concat(dc_heros)
console.log(all_heros)                                  //[ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'flash', 'batman' ]

//another easy method using spread(mostly use this method)
let all_new_heros = [...marval_heros, ...dc_heros]
console.log(all_new_heros)                              //[ 'Thor', 'IronMan', 'SpiderMan', 'Superman', 'flash', 'batman' ]

//it returns the one complete array of sub arrays

let another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, [4, 6]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array)                                  //[1, 2, 3, 4, 5,6, 7, 6, 7, 8,4, 6] it returns the complete array

console.log(Array.isArray("Atharv"))                             //false is a not array
console.log(Array.from("Atharv"))                                //.from() convert it into array  [ 'A', 't', 'h', 'a', 'r', 'v' ]
console.log(Array.from({name : "Atharv"}))                       //key value pair is not convert into array

//convert it into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))                    //[ 100, 200, 300 ]