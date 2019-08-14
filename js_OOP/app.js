// Section 5 - 43 constructors & this keyword

// Create an object (used when creating one instance of object)
const brad = {
  name: "brad",
  age: 30
};

// Create a constructor that can be instantiated (ES5)
function Person(name) {
  (this.name = name), (this.age = "age");
}

// Instantiate persons
const peter = new Person("peter");
const john = new Person("john");

// Clear console
console.clear();

// Section 5 - 44 built in constructors

// You can create primitive types as objects with constructors, it's not recommended because you will have problems with type comparison.

// Create a string as a primitive type
const name44 = "Jeff";
console.log(name44);
console.log(typeof name44);

// Create a string as an object
const name441 = new String("Jeff");
console.log(name441);
console.log(typeof name441);

// Add properties to primitive object
name441.foo = "bar";
console.log(name441);

// Create a number as a primitive type
const number44 = 1;
console.log(number44);
console.log(typeof number44);

// Create a number as a primitive type
const number441 = new Number(1);
console.log(number441);
console.log(typeof number441);

// Create a boolean as a primitive type
const bool44 = true;
console.log(bool44);
console.log(typeof bool44);

// Create a boolean as an object
const bool441 = new Boolean(true);
console.log(bool441);
console.log(typeof bool441);

// Initialize function the normal way
const getSum1 = function(x, y) {
  return x + y;
};

console.log(getSum1(1, 2));
console.log(typeof getSum1());

// Initialize function the other way
const getSum2 = new Function("x", "y", "return x + y");
console.log(getSum2(1, 5));
console.log(typeof getSum2());

// Create object the normal way
const john1 = { name: "John" };

// Create object the other way
const john2 = new Object({ name: "John" });

// Create an array the normal way
const arr1 = [1, 2, 3, 4];

// Create an array the other way
const arr2 = new Array(1, 2, 3, 4);

// Create a Regular Expressions the normal way
const re1 = /\w+/;

// Create a regular expression the other way
const re2 = new RegExp("\\w+");

// Clear console
console.clear();

// Section 5 - 45 Prototypes explained

/*
  All object in js have a prototype
  A prototype is an object itself
  All object inherit their properties and methods from their prototype
  When you're dealing with object literals you're inheriting from Object.prototype
  When you're dealing with object created trough a constructor you're inheriting from Constructor.prototype
*/

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Initialize person
const pete = new Person("Pete", "Doe", "1-1-90");
const mary = new Person("Mary", "Johnson", "01-14-1992");

// Console log mary
console.log(mary);

/*
Pete and mary both have the calculateAge function, but it's not different for them. That's why you would want calculateAge to be inherited from the prototype.
*/

// Move method (or create method) in / to prototype
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

console.log(pete.calculateAge());

// Object.prototype also contains predefined methods
console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));

// Clear Console
console.clear();

// Section 5 - 46 Prototypal inheritance

// Create object to inherit from
function Person1(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Create prototype method
Person1.prototype.greeting = function() {
  return `Hello I'm ${this.firstName} ${this.lastName}`;
};

// Create object that wants to inherit from Person1
function Customer(firstName, lastName, membership) {
  // Inherit properties and methods from person
  Person1.call(this, firstName, lastName);

  this.membership = membership;
}

// Inherit the Person.prototype methods
Customer.prototype = Object.create(Person1.prototype);

// Make customer.proto return Customer()
Customer.prototype.constructor = Customer;

// Initialize an object that inherits from Person1
const customer = new Customer("Diana", "Johnson", "Standard");

console.log(customer);

// Customer greeting
Customer.prototype.greeting = function() {
  return `Welcome ${this.firstName} ${this.lastName}`;
};

console.log(customer.greeting());

// Clear console
console.clear();

// Section 5 - 47 Object.create
const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
};

// Create an object that has the specified prototype
const sarah = Object.create(personPrototypes);
sarah.firstName = "Sarah";
sarah.lastName = "Williams";
sarah.age = 30;

console.log(sarah);
console.log(sarah.greeting());

// Clear console
console.clear();

// Section 5 - 48 ES6 classes

// Create a class
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello I'm ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  // Call without initializing
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary1 = new Person2("Mary1", "Williams", "01-14-1992");

console.log(mary1.calculateAge());

console.log(Person2.addNumbers(1, 3));

// Clear console
console.clear();

// Section 5 - 48 ES6 subclasses (inheritence)
class Person3 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello I'm ${this.firstName} ${this.lastName}`;
  }
}

class Customer1 extends Person3 {
  constructor(firstName, lastName, membership) {
    // Call Person3 constructor
    super(firstName, lastName);

    this.membership = membership;
  }
}

const john3 = new Customer1("John", "Doe", "Standard");

console.log(john3);
console.log(john3.greeting());
