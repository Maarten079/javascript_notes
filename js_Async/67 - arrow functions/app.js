// // Normal function
// const sayHello = function() {
//   console.log("hello");
// };

// // Arrow function
// const sayHello = () => {
//   console.log("hello");
// };

// // One line function does not need braces
// const sayHello = () => console.log("hello");

// // One line returns
// const sayHello = () => "Hello";

// // Return Object
// const sayHello = () => ({ msg: "Hello" });

// sayHello();

// console.log(sayHello());

const sayHello = (a, b) => a + b;

console.log(sayHello(1, 2));

const users = ["a", "aaa", "aa"];

// Long
let nameLengths = users.map(function(name) {
  return name.length;
});

console.log(nameLengths);

// Shorter
nameLengths = users.map(name => {
  return name.length;
});
console.log(nameLengths);

// Shortest
nameLengths = users.map(name => name.length);
console.log(nameLengths);
