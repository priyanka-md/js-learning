// Array

// const myArr = [0,11,2]
const myArray = new Array(0,1,2,3,4,5)
console.log(myArray)
// myArray.push(4)  
// myArray.pop(4)  
// myArray.unshift(9)
// myArray.shift()
// let include = myArray.includes(9)
// console.log(include)

// Slice and splice 

const myn1 = myArray.slice(1,3)

console.log(myn1)
console.log("B" , myArray);

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("C", myArray) // modify original array also

