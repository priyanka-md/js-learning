// singleton
// Object.create  // object created through constructer
// Object literals

const mySym = Symbol("key1")

const jsUser = {
    "full name" : "test 2",
    name : "test",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email : "test@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(jsUser.email) // test@gmail.com
// console.log(jsUser["email"]) // test@gmail.com
// console.log(jsUser["full name"]) //test 2
// console.log(jsUser[mySym]) //mykey1

// jsUser.email = "test1@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "test2@gmail.com"
console.log(jsUser)

// {
//   'full name': 'test 2',
//   name: 'test',
//   age: 18,
//   location: 'Jaipur',
//   email: 'test1@gmail.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'Monday', 'Saturday' ],
//   Symbol(key1): 'mykey1'
// }

jsUser.greeting = function() {
    console.log("Hello js User")
}

// console.log(jsUser.greeting) // [Function (anonymous)]
console.log(jsUser.greeting()) // Hello js User

jsUser.greeting2 = function() {
    console.log(`Hello js User, ${this.name}`)
}

console.log(jsUser.greeting2()) // Hello js User, test