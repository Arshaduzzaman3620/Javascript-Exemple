// const coding = ["js", "cpp", "python", "rb", "java", "php"];

// coding.forEach((item, index) => {
//   console.log(`The index is ${index} and
const books = [
  {title :'book1', genre : 'fiction', author: 'author1'},
  {title :'book2', genre : 'non-fiction', author: 'author2'},
  {title :'book3', genre : 'fiction', author: 'author3'},
  {title :'book4', genre : 'science', author: 'author4'},
  {title :'book5', genre : 'fiction', author: 'author5'},
  {title :'book6', genre : 'non-fiction', author: 'author6'},
  {title :'book7', genre : 'science', author: 'author7'},
];
let userBooks = books.filter((book) => book.genre === 'fiction');

userBooks = books.filter((book) => {
  return book.author >= 'author1' && book.author === 'author5';
});
console.log(userBooks);