// JavaScript Comparison Operators

// Operator | Description                 | Example       | Result
// -------- | --------------------------- | ------------- | ---------
// ==       | Equal to (loose)            | 5 == '5'      | true
// ===      | Strict equal (type + value) | 5 === '5'     | false
// !=       | Not equal (loose)           | 5 != '5'      | false
// !==      | Strict not equal            | 5 !== '5'     | true
// >        | Greater than                | 10 > 5        | true
// <        | Less than                   | 2 < 3         | true
// >=       | Greater than or equal       | 5 >= 5        | true
// <=       | Less than or equal          | 4 <= 3        | false

// Example comparisons
let a = 10;
let b = "10";

console.log(a == b); // true (loose comparison)
console.log(a === b); // false (strict comparison)
console.log(a != b); // false
console.log(a !== b); // true
//