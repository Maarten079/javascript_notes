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
