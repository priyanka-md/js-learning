const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 123.888

console.log(otherNumber.toPrecision(4))

const hundereds = 100000000
console.log(hundereds.toLocaleString('en-IN'))


// ********************* Maths *********************** //

console.log(Math)
console.log(Math.abs(-4)); // Minus values in positive = 4
console.log(Math.round(4.3)) // 4
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.2)) // 4
console.log(Math.min(4,2,8,9)) // 2
console.log(Math.max(4,2,8,9)) // 9

console.log(Math.random()) // value btw 0 and 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)