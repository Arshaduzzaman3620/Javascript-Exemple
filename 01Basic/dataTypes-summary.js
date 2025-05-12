// ============================
//  DATA TYPES IN JAVASCRIPT
// ============================

// 🔹 JavaScript has two main categories:
// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types

// ----------------------------
// 🔸 1. PRIMITIVE DATA TYPES
// ----------------------------
// These store single values and are immutable.

let name = "John"; // String       -> text
let age = 25; // Number       -> integers & floats
let isStudent = true; // Boolean      -> true or false
let x = undefined; // Undefined    -> variable declared but not assigned
let y = null; // Null         -> intentional empty value
let id = Symbol("id"); // Symbol       -> unique identifier
let bigNum = 12345678901234567890n; // BigInt -> large integers

// ----------------------------
// 🔸 2. NON-PRIMITIVE DATA TYPES
// ----------------------------
// These store collections or complex data.

let numbers = [1, 2, 3]; // Array     -> ordered list
let person = { name: "John", age: 25 }; // Object    -> key-value pairs
function greet() {
  return "Hi!";
} // Function  -> reusable code block
let date = new Date(); // Date      -> date and time object

// ============================
// typeof Operator Examples:
// ============================
console.log(typeof "hello"); // "string"
console.log(typeof 123); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a known JavaScript quirk)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
