/**
 * Demonstrates various JavaScript array methods and operations.
 *
 * Examples include:
 * - Accessing array elements by index
 * - Adding/removing elements at the end (`push`, `pop`)
 * - Adding/removing elements at the beginning (`unshift`, `shift`)
 * - Checking for element existence (`includes`)
 * - Finding the index of an element (`indexOf`)
 * - Extracting a portion of the array (`slice`)
 * - Modifying array contents (`splice`)
 * - Combining arrays (`concat`)
 * - Joining array elements into a string (`join`)
 * - Reversing and sorting arrays (`reverse`, `sort`)
 * - Filtering elements by type (`filter`)
 * - Mapping elements to their types (`map`)
 * - Iterating over elements (`forEach`)
 *
 * The code also demonstrates how array methods affect the original array or return new arrays.
 * Useful for learning and understanding basic and intermediate array manipulations in JavaScript.
 */
const myArray = [0,1,2,4,5,56,7,true,"hello",null,undefined];
const muhero =["ironman","spiderman","batman","superman"];

console.log(myArray[0]); // 0

// Array methodm

// myArray.push(100); // Add 100 to the end of the array
// myArray.pop(); // Remove the last element of the array
// console.log(myArray); // [0,1,2,4,5,56,7,true,"hello",null,undefined,100]
// myArray.unshift(0); // Add 0 to the beginning of the array
// console.log(myArray.includes(8));
// console.log(myArray.indexof(9));

console.log("A",myArray.length);

console.log("Original array:", myArray);

// push
myArray.push(200);
console.log("After push(200):", myArray);

// pop
myArray.pop();
console.log("After pop():", myArray);

// unshift
myArray.unshift(-1);
console.log("After unshift(-1):", myArray);

// shift
myArray.shift();
console.log("After shift():", myArray);

// includes
console.log("Includes 5:", myArray.includes(5));

// indexOf
console.log("Index of 56:", myArray.indexOf(56));

// slice
console.log("Slice (2,5):", myArray.slice(2, 5));

// splice
myArray.splice(2, 1, "new");
console.log("After splice(2,1,'new'):", myArray);

// concat
const combined = myArray.concat(muhero);
console.log("After concat with muhero:", combined);

// join
console.log("Join with '-':", myArray.join('-'));

// reverse
console.log("Reverse:", myArray.slice().reverse());

// sort (note: sorts as strings)
console.log("Sort:", myArray.slice().sort());

// filter
console.log("Filter numbers:", myArray.filter(item => typeof item === "number"));

// map
console.log("Map (typeof):", myArray.map(item => typeof item));

// forEach
myArray.forEach((item, idx) => {
  console.log(`Element at ${idx}:`, item);
});