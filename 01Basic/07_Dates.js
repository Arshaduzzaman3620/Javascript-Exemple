let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toDateString()); // Current date and time
console.log(myDate.toJSON()); //
console.log(myDate.toLocaleDateString()); // Current date
//  Current date and time
console.log(myDate.toLocaleTimeString()); // Current time
let mycreateDate = new Date(2025, 0, 1); // January 1, 2025
console.log(mycreateDate.toDateString()); // Current date and time

let myTimeStamp = new Date(2025, 0, 1).getTime(); // January 1, 2025
console.log(myTimeStamp); // Current date and time


let newDate = new Date();
console.log(newDate.getMonth()); // Current month
