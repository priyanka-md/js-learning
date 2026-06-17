// dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5 , 3) // month start from 0
let myCreatedDate = new Date("01-14-2026")

console.log(myCreatedDate.toLocaleString())

let timestamp = Date.now()

console.log(timestamp)