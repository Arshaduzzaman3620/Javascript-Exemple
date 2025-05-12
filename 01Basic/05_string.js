// ============================
// 📦 STRING BASICS
// ============================

// 🔹 What is a String?
// A string is a sequence of characters used to represent text.

let str1 = "Hello"; // Double quotes
let str2 = "World"; // Single quotes
let str3 = `Hello World`; // Backticks (Template Literal)

// 🔹 String Concatenation (Old Way)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// ============================
// 💡 TEMPLATE LITERALS (BACKTICKS)
// ============================

// 🔹 1. String Interpolation (Insert variables directly)
let age = 25;
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(greeting);

// 🔹 2. Multiline Strings
let poem = `Roses are red,
Violets are blue,
I love coding,
And JavaScript too!`;
console.log(poem);

// 🔹 3. Embed Expressions Inside ${}
let a = 5;
let b = 10;
console.log(`Sum: ${a + b}, Double: ${2 * b}`);

// 🔹 4. Clean Code
let product = "Phone";
let price = 999;
let info = `The ${product} costs $${price}.`;
console.log(info);

// 🔹 5. Combine with Functions
function greet(name) {
  return `Hello, ${name}! Welcome to the site.`;
}
console.log(greet("Arshil"));

// 🔹 6. Nesting Template Literals
let user = {
  name: "Sara",
  hobbies: ["reading", "coding"],
};
let details = `User: ${user.name}, Hobbies: ${user.hobbies
  .map((h) => `${h}`)
  .join(", ")}`;
console.log(details);

// ============================
// 🛠 STRING METHODS
// ============================

let text = "JavaScript";

console.log(text.length); // 10
console.log(text.toUpperCase()); // JAVASCRIPT
console.log(text.toLowerCase()); // javascript
console.log(text.charAt(4)); // S
console.log(text.indexOf("S")); // 4
console.log(text.includes("Script")); // true
console.log(text.slice(0, 4)); // Java
console.log(text.replace("Java", "Type")); // TypeScript

// ============================
// 🔁 STRING TO ARRAY / TRIM / ESCAPE
// ============================

let quote = 'He said, "JavaScript is awesome!"'; // Using escape inside string

let csv = "apple,banana,orange";
let fruits = csv.split(","); // ["apple", "banana", "orange"]

let raw = "   Hello World!   ";
let clean = raw.trim(); // "Hello World!"

// ============================
// ⚠️ BACKTICK RULES & NOTES
// ============================

// ✅ Use only backticks (`) for interpolation.
// ❌ This won't work: "Hello ${name}"
// ✅ This works: `Hello ${name}`
// Backticks help you:
// - Embed variables
// - Write multiline strings
// - Clean, readable code
// - Handle dynamic templates

// ============================
// 📝 FINAL SUMMARY
// ============================

// ✔ Use " " or ' ' for simple, fixed strings
// ✔ Use ` ` (backticks) when:
//    - You want to use variables inside a string
//    - You want to span strings across multiple lines
//    - You want cleaner, dynamic output
//    - You use functions that return strings
