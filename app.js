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
var val = 5;
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

// Section 2 - 11 Template literals (ES6)

const name5 = "John";
const age = 30;
const job = "webdev";
const city = "Zoetermeer";

// Template literals `${var}`
val = `
<ul>
  <li>Name: ${name5}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>
  <li>${age > 30 ? "Over 30" : "Under 30"}</li>
</ul>  
`;

// Section 2 - 12 Arrays and array methods

// Create an array
var array1 = [1, 2, 3, 4];
var array2 = new Array(1, "apple", NaN, undefined, true, new Date());

// Check if is array
val = Array.isArray(array);
console.log(val);

// Get single value
console.log(array1[0]);

// Insert into array
array1[2] = 500;

// Find index of value
val = array1.indexOf(500);
console.log(val);

// Add to end of array
array1.push(250);
console.log(array1);

// Add to front of array
array1.unshift(120);
console.log(array1);

// Take off from end
array1.pop();
console.log(array1);

// Take off from front
array1.shift();
console.log(array1);

// Splice out from index in array
array1.splice(1, 3);
console.log(array1);

// Reverse array
array1.reverse();
console.log(array1);

// Concatenate array
array1 = array1.concat(array2);
console.log(array1);

// Sorting arrays
array1 = [2, 3, 1, 4];
array1.sort();
console.log(array1);

// Find a number
function under50(num) {
  return num < 50;
}
val = array1.find(under50);
console.log(val);

// Section 2 - 13 Object literals

// Create an object
const person1 = {
  firstName: "Steve",
  lastName: "Smith",
  age: "30",
  adress: {
    city: "Zoetermeer",
    street: "Kadelaan"
  },
  getBirthYear: function() {
    return 2019 - this.age;
  }
};

// Modify an attribute
val = person;
console.log(val);
val = person.name;
console.log(val);

//Clear the console
console.clear();

// Section 2 - 14 Dates and times

// Create a date of today
let today = new Date();
console.log(today);
console.log(typeof today);

// Convert date to string
today = today.toString();
console.log(today);
console.log(typeof today);

// Create a custom date
today = new Date("01-14-1992");
today = new Date("January 14 1992 12:05:00");
console.log(today);
console.log(typeof today);

// Get month (0 based)
val = today.getMonth();
console.log(val);
console.log(typeof val);

// Get day of the month (not 0 based)
val = today.getDate();
console.log(val);
console.log(typeof val);

// Get year
val = today.getFullYear();
console.log(val);
console.log(typeof val);

// Set month (or other parameters)
today.setDate(2);
console.log(today);
console.log(typeof today);

// Section 2 - 15 If statements and comparison operators

// IF statement
let meetsRequirement;
if (meetsRequirement) {
  console.log("do this");
} else {
  console.log("do this");
}

// Equal to value (true)
if (meetsRequirement == true) {
  console.log("do this");
} else {
  console.log("do this");
}

// Equal to value (true) and type (boolean)
if (meetsRequirement === true) {
  console.log("do this");
} else {
  console.log("do this");
}

// Check if undefined
if (typeof id !== "undefined") {
  console.log("do this");
} else {
  console.log("do this");
}

// Greater of less than
if (age > 30) {
  console.log("do this");
} else {
  console.log("do this");
}

// Else if
if (age < 30) {
  console.log("You're young");
} else if (age > 30 && age < 60) {
  console.log("You're less young");
} else {
  console.log("You're old");
}

// AND && and OR ||
if (age < 30 || name === "Maarten") {
  console.log("do something");
} else if (age > 30 && name === "Maarten") {
  console.log("do something");
}

// Ternary operator
console.log(age === 30 ? "Correct" : "Incorrect");

// Section 2 - 16 Switches

// Create a switch
const color = "red";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("Color is blue");
    break;
  case "yellow":
    console.log("Color is yellow");
    break;
  default:
    console.log("Color is not red, blue or yellow");
    break;
}

// Clear the console
console.clear();

// Section 2 - 17 Functions & Expressions

// Create a function
function greet() {
  console.log("Hello");
}

// Calling a function
greet();

// Passing in parameters
function greet2(parameter) {
  console.log(`Hello ${parameter}`);
}
greet2("Maarten");

// Defining defaults
function greet3(firstName = "John", lastName = "Doe") {
  console.log(`Hello ${firstName} ${lastName}`);
}
greet3();

// Function expressions
const square = function(x = 2) {
  return x * x;
};
console.log(square(3));

// Immediately invocable function expressions - IFFEs
(function() {
  console.log("IFFE Ran..");
})();

// Function inside object (called a method)
const todo = {
  add: function() {
    console.log("Add todo");
  }
};
todo.add();

// Function outside of object
todo.delete = function() {
  console.log("delete todo");
};

// Clear console
console.clear();

// Section 2 - 18 General loops

// FOR loop
for (let x = 0; x < 10; x++) {
  if (x === 2) {
    console.log("2 is my favourite number, continue at 3");
    continue; // Go to the next iteration
  }
  console.log("Number", x);

  if (x === 9) {
    console.log("Stop the loop");
    break; // Breaks the loop
  }
}

// WHILE loop
let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}

// DO WHILE loop (always runs 1 time)

let j = 0;

do {
  console.log("number " + j);
  j++;
} while (j < 0);

// FOREACH loop
const cars = ["ford", "chevy", "honda", "toyota"];
cars.forEach(function(car, index) {
  console.log(index + " " + car);
});

// Map
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Karen" }
];

const ids = users.map(function(user) {
  return user.id;
});

console.log(ids);

//FOR IN
const user1 = {
  firstName: "John",
  lastName: "Doe",
  age: 40
};

for (let x in user1) {
  console.log(`${x} : ${user1[x]}`);
}

// Clear console
console.clear();

// Section 2 - 19 A look at the window object

// Window methods / object / properties

// // Alert
// window.alert("Hello World");

// // Prompt
// const input = prompt();
// alert(input);

// // Confirm
// if (confirm("Are you sure?")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// Get outer height and width
val = window.outerHeight;
console.log(val);
val = window.outerWidth;
console.log(val);

// Inner height and width
val = window.innerHeight;
console.log(val);
val = window.innerWidth;
console.log(val);

// Scroll point
val = window.scrollY;

// Location object
val = window.location;
console.log(val);

// // Redirect
// window.location.href = "http://google.com";

// // Reload
// window.location.reload();

// // History Object
// window.history.go(-2);

// Navigator Object
val = window.navigator;
console.log(val);

// Clear console
console.clear();

// Section 2 - 20 Block scope with let and const

// Global scope
var a = 1;
let b = 1;
const c = 1;

console.log(`Global scope: ${a} ${b} ${c}`);

// Function scope
function test() {
  var a = 2;
  let b = 2;
  const c = 2;

  console.log(`Function scope: ${a} ${b} ${c}`);
}

// Block level scope
if (true) {
  var a = 3;
  let b = 3;
  const c = 3;
  console.log(`Block scope: ${a} ${b} ${c}`);
}

for (let b = 0; a < 10; a++) {
  console.log(`loop: ${a}`);
}

test();

console.log(`Global scope: ${a} ${b} ${c}`);

// Clear console
console.clear();

// Section 3 - 22 Examining the document object?

// Select the document
val = document;
console.log(val);

// Select the document as HTML collection
val = document.all;
console.log(val);

// Select item in HTML collection
val = val[2];
console.log(val);

// Select the head/body of document
val = document.head;
console.log(val);

// Select forms
val = document.forms;
console.log(val);

// Select links
val = document.links;
console.log(val);

// Get attribute
val = document.scripts[2].getAttribute("src");
console.log(val);

// Convert HTMLcollection to Array
let scripts = document.scripts;
scripts = Array.from(scripts);
console.log(scripts);

// Clear console
console.clear();

// Section 3 - 23 DOM Selectors for Single Elements

// Get element by ID
console.log(document.getElementById("task-title"));

// Get things from the element
console.log(document.getElementById("task-title").nodeType);

// Change styling
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";

// Change content
document.getElementById("task-title").textContent = "My Tasks";
document.getElementById("task-title").innerText = "Task list";
document.getElementById("task-title").innerHTML =
  '<span style="color : red">Task List</span>';

// querySelector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));

document.querySelector("li:last-child").style.color = "red";

// Clear console
console.clear();

// Section 3 - 24 DOM Selectors for Multiple Elements

// Select elements by classname
const items = document.getElementsByClassName("collection-item");
console.log(items);

// Select one element from a collection of items
console.log(items[1]);

// Select elements by
let lis = document.getElementsByTagName("li");
console.log(lis);

// Convert HTML collection into array
lis = Array.from(lis);
console.log(lis);

// Select elements with queryselector
console.log(document.querySelectorAll("li:nth-child(even)"));

// Clear console
console.clear();

// Section 3 - 25 Traversing the DOM

const list = document.querySelector("ul.collection");
console.log(list);
const listItem = document.querySelector("li.collection-item:first-child");
console.log(listItem);

// Get child nodes
val = list.childNodes;
console.log(val);

// Get children nodes
val = list.children;
console.log(val);

// Get children nodes of children nodes
val = list.children[1].children;
console.log(val);

// Get child element
val = list.firstElementChild;
console.log(val);

// Get parent node
val = val.parentNode;
console.log(val);

// Get parent element
val = list.firstElementChild;
val = val.parentElement;
console.log(val);

// Get parent of parent
val = list.firstElementChild;
val = val.parentElement.parentElement;
console.log(val);

// Get next sibling node
val = list.firstElementChild.nextSibling;
console.log(val);

// Get next element sibling
val = list.firstElementChild.nextElementSibling;
console.log(val);

// Get previous elemnt sibling
val = list.previousElementSibling;
console.log(val);

// Clear console
console.clear();

// Section 3 - 26 Creating elements

// Create an element
const li = document.createElement("li");
console.log(li);

// Add a class
li.className = "collection-item";

// Add an ID
li.id = "new-item";

// Add attribute
li.setAttribute("title", "new-item");

// Create text node and append
li.appendChild(document.createTextNode("Hello World!"));

// Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

// Create new link element
const link = document.createElement("a");
console.log(link);

// Add classes
link.className = "delete-item secondary-content";
console.log(link);

// Append link to li
li.appendChild(link);
console.log(li);

// Create icon
const icon = document.createElement("i");
console.log(icon);

// Add classes
icon.className = "fa fa-remove";
console.log(icon);

// Append icon to link
link.appendChild(icon);
console.log(li);

// Clear console
console.clear();

// Section 3 - 27 Removing and Replacing elements, classes and id's

// REPLACE ELEMENT

// create new heading
const newHeading = document.createElement("h2");
console.log(newHeading);

// Add ID
newHeading.id = "task-title";
console.log(newHeading);

// Add new text node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");

// Parent (you replace childs from parents)
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove element
const lis1 = document.querySelectorAll("li");
console.log(lis1);
const list1 = document.querySelector("ul");
console.log(list1);

// Remove list item
lis[0].remove();

// Remove by child element
list1.removeChild(lis[3]);

// ADDING AND REMOVING ATTRIBUTES

// Select element
const firstLi = document.querySelector("li:first-child");
console.log(firstLi);

// View classes
console.log(firstLi.classList);
console.log(firstLi.className);
console.log(firstLi.classList[0]);

// Add class
firstLi.classList.add("test");
console.log(firstLi.classList);

// Remove class
firstLi.classList.remove("test");
console.log(firstLi.classList);

// View attribute
console.log(firstLi.getAttribute("href"));

// Add attribute
console.log(firstLi.setAttribute("href", "https://google.com"));
console.log(firstLi.getAttribute("href"));

// Check if element has attribute
console.log(firstLi.hasAttribute("href"));

// Clear console
console.clear();

// Section 3 - 28 Event Listener and the event object

// ADD AN EVENT LISTENER

// Select element and add listener
document.querySelector(".clear-tasks").addEventListener("click", function(e) {
  console.log("Hello World");

  // Prevent default behaviour (stop reloading the page)
  e.preventDefault();
});

// External function on click
document.querySelector(".clear-tasks").addEventListener("click", onClick);

// Show target
function onClick(e) {
  console.log("clicked");
  console.log(e);
  console.log(e.target);
  e.preventDefault();
}

// Clear console
console.clear();

// // Section 3 - 29 Mouse events

// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h2");

// console.log(heading);
// // Click
// clearBtn.addEventListener("click", runEvent);

// // Double click
// clearBtn.addEventListener("dblclick", runEvent);

// // Mousedown
// clearBtn.addEventListener("mousedown", runEvent);

// // Mouseup
// clearBtn.addEventListener("mouseup", runEvent);

// // Mouseenter
// card.addEventListener("mouseenter", runEvent);

// // Mouseleave
// card.addEventListener("mouseleave", runEvent);

// // Mouseenter
// card.addEventListener("mouseover", runEvent);

// // Mouseleave
// card.addEventListener("mouseout", runEvent);

// // Mousemove
// card.addEventListener("mousemove", runEvent);

// // Event Handler (change heading to coords)
// function runEvent(e) {
//   console.log(`event type: ${e.type}`);

//   heading.textContent = `X = ${e.offsetX} Y = ${e.offsetY}`;
// }

// Section 3 - 30 Keyboard & input events

// GET VALUE FROM FORM FIELD
const form = document.querySelector("form");
const taskInput = document.getElementById("task");

form.addEventListener("submit", runEvent);

function runEvent(e) {
  console.log(`Event type: ${e.type}`);

  console.log(taskInput.value);

  // Clear input value
  taskInput.value = "";

  e.preventDefault();
}

// // Key down
// taskInput.addEventListener("keydown", runEvent1);

// // Key up
// taskInput.addEventListener("keyup", runEvent1);

// // Keypress
// taskInput.addEventListener("keypress", runEvent1);

// // Focus
// taskInput.addEventListener("focus", runEvent1);

// // Blur
// taskInput.addEventListener("blur", runEvent1);

// // Cut
// taskInput.addEventListener("cut", runEvent1);

// // Copy
// taskInput.addEventListener("copy", runEvent1);

// // Paste
// taskInput.addEventListener("paste", runEvent1);

// // Input (always triggers)
// taskInput.addEventListener("input", runEvent1);

// function runEvent1(e) {
//   console.log(`Event type: ${e.type}`);

//   e.preventDefault();
// }

// Section 3 - 31 Event Bubbling & Event Delegation

// EVENT BUBBLING

// When an event happens in the DOM it will bubble up to the parent

document.querySelector(".card-title").addEventListener("click", function(e) {
  console.log("card-title");
});

document.querySelector(".card-content").addEventListener("click", function(e) {
  console.log("card-content");
});

document.querySelector(".card").addEventListener("click", function(e) {
  console.log("card");
});

// EVENT DELEGATION

// Event delegation places an event listener on a parent and uses logic to target the child

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}

// Clear console
console.clear();

// Section 3 - 32 Local Storage

// Set local storage item
localStorage.setItem("name", "John");

// Set session storage
sessionStorage.setItem("name", "Beth");

// get from storage
const name6 = localStorage.getItem("name");
console.log(name6);

// remove from storage
localStorage.removeItem("name");

// clear local storage
localStorage.clear();

// safe from form
document.querySelector("form").addEventListener("submit", function(e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  alert("task saved");

  e.preventDefault();
});

// clear console
console.clear();
