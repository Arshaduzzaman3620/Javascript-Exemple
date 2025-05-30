"use strict"; // Treat all JS code as newer version (ES6+), helps catch errors


// Primitive types
let name = "John Doe"; // String
let age = 30; // Number
let isEmployed = true; // Boolean
let salary = null; // Null is an object type in JS, but it's a primitive value
let undefinedValue; // Undefined
let symbol = Symbol("unique"); // Symbol
let bigIntValue = 12345678901234567890n; // BigInt

// Object types
let person = { name: "John", age: 30 }; // Object
let array = [1, 2, 3, 4, 5]; // Array
function greet() {
  return "Hello";
} // Function
let date = new Date(); // Date use for date and time
let regex = /[a-z]/; // RegExp use for regular expressions
let map = new Map(); // Map use for key-value pairs
let set = new Set(); // Set use
let weakMap = new WeakMap(); // WeakMap use for memory management
let weakSet = new WeakSet(); // WeakSet use for memory management

// JSON example
let jsonString = '{"name": "John", "age": 30}'; // JSON string use for data exchange
