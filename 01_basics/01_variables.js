const accountId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accountId = 2 //Not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Jaipur"
console.log(accountId);

/*
Prefer not to use var bcoz of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])