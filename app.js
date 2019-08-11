// Section 2 - 5 The console

/*
  multi
  line
  comments
*/

// Strings are black in the console
console.log("hi");

// Numbers are blue
console.log(123);

// Booleans
console.log(true);

// Variables
var greeting = "hello";
console.log(greeting);

// Arrays
console.log([1, 2, 3]);

// Objects
console.log({ a: 1, b: 2 });

// Console log as table
console.table({ a: 1, b: 2, c: 3 });

// Errors
console.error("this is some error");

// Warning
console.warn("This is a warning");

// Time how long tasks take
console.time("Custom message");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.timeEnd("Custom message");

// Clear the console
console.clear();

// Section 2 - 6 Variables

// Initialize variable
// Name can contain letters, numbers, _ and $
// Name can not start with number
var name;

// Assigning variable
name = "John Doe";

// In the same line
var name2 = "John Doe";

// Camel case
var firstName = "John";

// Underscore
var first_name = "John";

// Pascal case
var FirstName = "John";

// LET can be reassigned
let name3 = "John";
console.log(name3);
name3 = "Sarah";
console.log(name3);

// CONST can not be reassigned
const name4 = "John";
console.log(name4);
// name4 = "Sarah"; // This gives an error
console.log(name4);

// CONST as object
const person = {
  name: "John",
  age: 30
};
console.log(person.name);
person.name = "Sarah"; // This does not give an error
console.log(person.name);

// Clear console
console.clear();

// Section 2 - 7 Data types

// A primitive datatype is stored in the location the variable accesses, the stack

// A reference data type is accessed by a pointer that points to the location in memory, the heap

// Primitive data types
const string = "string";
const number = 123;
const boolean = true;
const not0 = null;
const notDefined = undefined;
const symbol = Symbol("foo");

// Console log type
console.log(typeof symbol);

// Reference data types (objects)
const array = [1, 2, 3];
const object = { a: 1, b: 2 };
const myFunction = function() {
  console.log("Hello World!");
};
const date = new Date(14 - 01 - 1992);

// Javascript is a dynamically typed language, types are associated with values not variables

// Clear console
console.clear();

// Section 2 - 8 Type conversion

// Number to string
let val = 5;
console.log(typeof val);
val = String(val);
console.log(typeof val);

// Bool to string
val = true;
console.log(typeof val);
val = String(val);
console.log(typeof val);

// Object to string
val = new Date();
console.log(typeof val);
val = String(new Date());
console.log(typeof val);

// ToString()
val = 5;
console.log(typeof val);
val = val.toString();
console.log(typeof val);

// String to number
val = "5";
console.log(typeof val);
val = Number(val);
console.log(typeof val);

// Bool to number
val = true;
console.log(typeof val);
val = Number(val);
console.log(typeof val);
console.log(val);
val = Number(false);
console.log(typeof val);
console.log(val);

// Null to number
val = Number(null);
console.log(typeof val);
console.log(val);

// Array to number (NaN)
val = Number([1, 2, 3]);
console.log(typeof val);
console.log(val);

// ParseInt()
val = parseInt("100.3");
console.log(typeof val);
console.log(val);

// ParseFloat()
val = parseFloat("100.3");
console.log(typeof val);
console.log(val);

// Type coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(sum);

// Clear console
console.clear();

// Section 2 - 9 Numbers & Math Object

// Simple math with numbers
const num1 = 5;
const num2 = 7;

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
// Methods are static, Math object does not need to be initialized / assigned

val = Math.PI;
val = Math.E;
val = Math.round(2.9);
val = Math.ceil(2.4);
val = Math.floor(2.6);
val = Math.sqrt(9);
val = Math.abs(-3);
val = Math.pow(2, 8); // Second number is the square
val = Math.min(2, 33, -5, 2);
val = Math.max(2, 33, -5, 2);

// Generate a random number between 0 and 1
val = Math.random();

// Generate a random number between 0 and 10
val = Math.random() * 10 + 1;

// Generate a whole random number between 0 and 10
val = Math.floor(Math.random() * 10 + 1);

console.log(val);

// Clear console
console.clear();

// Section 2 - 10 String methods and Concatenation

// Concatenate a string, put multiple strings together
firstName = "John";
const lastName = "Doe";
val = firstName + " " + lastName;
console.log(val);

// Concat()
val = firstName.concat(" ", lastName);
console.log(val);

// Append, add on to something
val = "John ";
val += "Doe";
console.log(val);

// Escaping characters
val = 'It\'s what I qoute "this" ';

// Convert string to uper/lowecase
val = firstName.toLowerCase();
console.log(val);
val = firstName.toUpperCase();
console.log(val);

// Select character in string
val = firstName[0];
console.log(val);

// charAt()
val = firstName.charAt("2");
console.log(val);

// Get last char
val = firstName.charAt(firstName.length - 1);
console.log(val);

// Find first / last index of character
val = firstName.indexOf("j"); // Must match upper / lowercase.
console.log(val);
val = firstName.lastIndexOf("n"); // Must match upper / lowercase.
console.log(val);

// Get a substring from a string
val = firstName.substring(0, 2);
console.log(val);

// Slice
val = firstName.slice(0, 2);
val = firstName.slice(-3); // Take the last 3 characters
console.log(val);

// Split string in array
str = "Hi my name is John";
val = str.split(" ");
console.log(val);

// Replace a substring with another substring
val = str.replace("John", "Maarten");
console.log(val);

// Check string for substring
val = str.includes("John");
console.log(val);
