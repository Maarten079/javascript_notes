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