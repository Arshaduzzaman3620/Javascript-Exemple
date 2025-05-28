// for of


// const arr = [1, 2, 3, 4, 5];
// for (const num  of arr) {
//   // console.log(`The value is ${num}`);


// }


// const greeting = "Hello, World!";
// for (const great of greeting) {
//   console.log(`The character is ${great}`);



// }


// maps

const map = new Map();
map.set('IN',"US");
map.set('US', "India");
map.set('UK', "United Kingdom");
map.set('CA', "Canada");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ':', value);
}