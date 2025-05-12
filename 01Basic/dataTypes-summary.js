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
// console.log(typeof "hello"); // "string"
// console.log(typeof 123); // "number"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" (this is a known JavaScript quirk)
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"


// ============================
// memory stack and heap memory
// ============================
// 1. Stack Memory
// - Stores primitive data types (e.g., numbers, strings, booleans).
let myYotubename = "https://www.youtube.com/@yotubena";

// - Fast access and allocation.
// - Limited size, automatically managed by JavaScript engine.
// - Example:
let a = 10; // Stored in stack memory
let b = a; // Copies value, both 'a' and 'b' point to the same value in stack
//
// 2. Heap Memory
// - Stores non-primitive data types (e.g., objects, arrays).
// - Slower access and allocation.
// - Larger size, managed by garbage collection.
// - Example:
let perSon = { name: "John", age: 30 }; // Stored in heap memory
let person2 = person; // Both 'person' and 'person2' point to the same object in heap
//
// - Modifying 'person2' will affect 'person' because they reference the same object.
// - Example:
person2.age = 31;
console.log(person.age); // Output: 31