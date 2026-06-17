// Stack (Primitive) , Heap (Non Primitive)

let myName = "Test"

let anotherName = "Test2"
anotherName = "Test3"

console.log(myName);
console.log(anotherName);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "usertwo@gmail.com"

console.log(userOne);
console.log(userTwo);