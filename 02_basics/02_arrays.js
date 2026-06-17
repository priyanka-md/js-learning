const marvel_heroes = ['thor', 'Ironman', 'spiderman']
const dc_heroes = ['superman', 'flash', 'batman']

// marvel_heroes.push(dc_heroes) //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes)

// const all_heroes = marvel_heroes.concat(dc_heroes) // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_heroes)

// Spread operator
// const all_new_heroes = [...marvel_heroes, ...dc_heroes] // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4 ,5]]]

// const real_another_array = another_array.flat(Infinity) 
// console.log(real_another_array)

// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

console.log(Array.isArray("Test")) // false
console.log(Array.from("Test")) // [ 'T', 'e', 's', 't' ]
console.log(Array.from({name: "Test"})) // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]