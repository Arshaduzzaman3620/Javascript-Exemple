const marvel_heroes = [ "iron "," hulk", "thor", "spiderman", "black panther", "captain america", "black widow" ];
const dc_heroes = [ "batman", "super","batman"];

const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);
// this is a spread operator its used to combine two arrays and create a new array

const another_array = [1,2,3,4[5,6,7]];
const real_array = another_array.flat();

// flat is used to flatten the array and create a new array in easy way

let score2 = 200;

const scores = [score1, score2];
const [first_score, second_score] = scores;
// this is a destructuring array


