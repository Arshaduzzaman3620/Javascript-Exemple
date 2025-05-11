// // Explicit Conversion Examples
// let str = "42";
// let num = Number(str);
// console.log(num); // Output: 42

// let bool = Boolean(0);
// console.log(bool); // Output: false

// let floatStr = "3.14";
// let floatNum = parseFloat(floatStr);
// console.log(floatNum); // Output: 3.14

// // Implicit Conversion Examples
// console.log("5" + 5); // Output: "55" (string concatenation)
// console.log("5" - 2); // Output: 3 (string is coerced to a number)
// console.log(true + 1); // Output: 2 (true is coerced to 1)

//"33" => 33
//"33abc" => NaN
//"abc33" => NaN
//"33.3" => 33.3
//"33.3abc" => NaN
//true => 1; false => 0


let score ="33"

// console.log(typeof score );

let  valueInNumber = Number(score);
// console.log(typeof valueInNumber);


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
// "" => false
// "John" => true 