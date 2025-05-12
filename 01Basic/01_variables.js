const accountId =144663
let accountEmail = "test@gmail.com"
var accountPassword = "12345678"
accountCity ="Tokyo Japan"
let accountState;


// accountId = 2 // This will throw an error because accountId is a constant

// {}this is a block scope variable
// let and const are block scope variables
// var is a function scope variable--prefer not use the var keyword

accountEmail ="HC@gmail.com"
accountPassword = "87654321"
accountCity = "Nagoya Japan"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

