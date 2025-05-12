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
// console.log(booleanIsLoggedIn);

// 1=> true; 0 => false
// "" => false
// "John" => true \\

// *****************Operation*******************
//THIS KIND OF OPERATION IS NOT RECOMMENDED
// let value = 3
// let negvalue = -value
// console.log(negvalue); // Output: -3

// console.log(true + 1); // Output: 2
// console.log(true - 1); // Output: 0
// console.log(+""); // Output: 0
// console.log(+"0"); // Output: 0

// let num1,num2,num3
// num1 = num2 = num3 = 2 + 2


// Prefix Increment and Decrement Operators
let a = 5;
let b = ++a; // Increment 'a' first, then assign to 'b'
console.log(a); // Output: 6
console.log(b); // Output: 6

let c = 5;
let d = --c; // Decrement 'c' first, then assign to 'd'
console.log(c); // Output: 4
console.log(d); // Output: 4

// Prefix operators are evaluated before the value is used in an expression
let x = 10;
let y = ++x + 5; // 'x' is incremented to 11, then added to 5
console.log(x); // Output: 11
console.log(y); // Output: 16

// Postfix Increment and Decrement Operators
let p = 10;
let q = p++; // Assign 'p' to 'q' first, then increment 'p'
console.log(p); // Output: 11
console.log(q); // Output: 10

let r = 10;
let s = r--; // Assign 'r' to 's' first, then decrement 'r'
console.log(r); // Output: 9
console.log(s); // Output: 10

// Postfix operators are evaluated after the value is used in an expression
let m = 15;
let n = m++ + 5; // 'm' is added to 5 first, then incremented
console.log(m); // Output: 16
console.log(n); // Output: 20