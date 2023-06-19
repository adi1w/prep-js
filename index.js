//ANSWER1//
example - 1
let a = 5;
let b = 5;
console.log(a == b);
console.log(a === b);


example - 2
console.log(1 == '1');
console.log(true == 1);
console.log(null == undefined);

//answer2//
// var example
var x = 10;
if (true) {
  var x = 20;
}
console.log(x);

// let example
let y = 10;
if (true) {
  let y = 20;
}
console.log(y);

// const example
const z = 10;
z = 20;
console.log(z);

//answer3//
x = 5;
console.log(x);
var x;


or
var x;
x = 5;

console.log(x);

//answer4//
let x;
console.log(x);
x = 10;
console.log(x);

//answer5//
function myFunction() {
  var a = 10;
  console.log(a);
}

myFunction();

//answer6//
//example 1//
function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello() {
  const name = "Aditi";
  greet(name);
}

sayHello();
//example2//
function greet(name) {
  console.log("Hello, " + name + "!");
}

function sayHello() {
  const name = "Aditi";
  greet(name);
}

sayHello();

//answer7//
exmple1
function myFunction() {
  var myVariable = 1;
  console.log(myVariable);
}
exmple2
myFunction();

function myFunction() {
  var myVariable = 1;
  console.log(myVariable);
}

//answer8//
function getUserData(userId, callback) {
  // Make a request to get user data
  // Once the data is received, call the callback function with the data
  const userData = { name: "Aditi", age: 25, email: "aditi12@gmail.com" };
  callback(userData);
}

// Define a callback function to process the user data
function processUserData(userData) {
  console.log("Name:", userData.name);
  console.log("Age:", userData.age);
  console.log("Email:", userData.email);
}

// Call the getUserData function with the user ID and the callback function
getUserData(123, processUserData);

//answer9//
// defining a function as a variable
const add = function (x, y) {
  return x + y;
}

// passing a function as an argument to another function
function calculate(operation, x, y) {
  return operation(x, y);
}

const result = calculate(add, 2, 3);

console.log(result);


//answer10//
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

//answer11//
function add(a, b) {
  return a + b;
}

//answer13//
for (variable in object) {
  // code to be executed    //syntx//
}


//exmple//
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

for (let property in person) {
  console.log(' ${property}: ${person[property]}');
}

//answer14//
local Scope
function myFunction() {
  var x = 10; // local variable
  console.log(x); // Output: 10
}
myFunction();
console.log(x); // Output: Uncaught ReferenceError: x is not defined



block Scope
if (true) {
  let x = 10; // block scope variable
  console.log(x); // Output: 10
}
console.log(x); // Output: Uncaught ReferenceError: x is not defined


functional scope
  (function () {
    var x = 10; // functional scope variable
    console.log(x); // Output: 10
  })();
console.log(x); // Output: Uncaught ReferenceError: x is not defined


scope Chain
var x = 10; // global variable

function outerFunction() {
  var y = 20; // outerFunction scope variable

  function innerFunction() {
    var z = 30; // innerFunction scope variable
    console.log(x + y + z); // Output: 60
  }

  innerFunction();
}

outerFunction();
console.log(x + y + z); // Output: Uncaught ReferenceError: y is not defined


//answer15//
let myValue = null;
let myOtherValue;

console.log(myValue); // logs null
console.log(myOtherValue); // logs undefined

if (myValue === null) {
  console.log("myValue is null");
}

if (myOtherValue === undefined) {
  console.log("myOtherValue is undefined");
}


//answer16//
function outerFunction() {
  const outerVariable = "Hello";

  function innerFunction() {
    const innerVariable = "World";
    console.log(outerVariable + " " + innerVariable);
  }

  return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // Output: "Hello World"


//answer17//
//call()//
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName);
  }
};

const person2 = {
  firstName: "aditi",
  lastName: "singh"
};

person.fullName.call(person2); // Output: Jane Doe

//apply()
const numbers = [5, 10, 15, 20];

const sum = Array.prototype.reduce.apply(numbers, [(a, b) => a + b]);
console.log(sum); // 50


//bind()//
const person = {
  firstName: 'Aditi',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

const getFullName = person.fullName.bind({ firstName: 'Jane', lastName: 'Doe' });
console.log(getFullName()); // Jane Doe


//answer18//
// Define the constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
}

// Create new instances of the object using the constructor function
var person1 = new Person("Alice", 25);
var person2 = new Person("Bob", 30);

// Call the greet method on each object
person1.greet(); // Output: "Hello, my name is Alice and I am 25 years old."
person2.greet(); // Output: "Hello, my name is Bob and I am 30 years old."


//answer19//

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
}

var person1 = new Person("Ajay", 30);
person1.greet(); // Output: Hello, my name is Ajay and I'm 30 years old.



//answer20//
// Define a constructor function
function Animal(name) {
  this.name = name;
}

// Add a method to the Animal prototype
Animal.prototype.walk = function () {
  console.log(this.name + ' is walking.');
};

// Create a new instance of Animal
var cat = new Animal('Whiskers');

// Call the walk method on the cat instance
cat.walk(); // Output: Whiskers is walking.

// The walk method is not defined on the cat instance itself,
// but it is found in the Animal prototype via the prototype chain.


//answer21//
const person = {
  name: 'Aditi',
  age: 25,
  address: {
    street: 'SOMDUT',
    city: 'Meerut',
    state: 'UP',
    zip: '250004'
  },
  sayHello: function () {
    console.log('Hello, my name is ${this.name}');
  }
};

//answer22//
function greeting() {
  console.log("Hello, world!");
}

setTimeout(greeting, 2000);
greeting()

//answer23//
async function getData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

console.log(getData());


//answer24//
< !DOCTYPE html >
  <html>
    <head>
      <title>My Webpage</title>
    </head>
    <body>
      <h1>Welcome to my webpage!</h1>
      <p>Here's some text for you to read.</p>

      <script>
		// Select the first <p> element on the page
          var pElement = document.querySelector('p');

		// Change the text inside the <p> element
            pElement.textContent = 'This is new text!';

		// Create a new <button> element
              var buttonElement = document.createElement('button');

              // Add some text to the button
              buttonElement.textContent = 'Click me!';

		// Append the button to the end of the <body> element
                document.body.appendChild(buttonElement);
              </script>
            </body>
          </html>

//</p>
//</script>

//</body>

//</html>

//answer25//
exmple1
let x;
console.log(x); // Output: undefined

exmple2
console.log(y); // Output: ReferenceError: y is not defined

exmple3
let x = "Hello";
let y = parseInt(x);
console.log(y); // Output: NaN


//answer26//
// Parent function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Child function constructor
function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit from parent prototype
Employee.prototype = Object.create(Person.prototype);

// Child method
Employee.prototype.introduce = function () {
  console.log("Hi, my name is " + this.name + ", and I work as a " + this.jobTitle + ".");
};

// Create a new Employee object
var employee1 = new Employee("Aditi", 22, "Software Engineer");

// Call parent and child methods
console.log(employee1.name); // output: "Aditi"
console.log(employee1.age); // output: 22
employee1.introduce(); // output: "Hi, my name is Aditi, and I work as a Software Engineer."


//answer27//
const name1 = Symbol('Aditi');
const name2 = Symbol('Aditi');

console.log(name1 === name2); // false
console.log(typeof name1); //symbol


//answer28//
filter
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

Map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


//answer29//
function updateValue(value) {
  value = 2;
}

let num = 1;
updateValue(num);
console.log(num); // Output: 1


function updateArray(array) {
  array.push(4);
}

let arr = [1, 2, 3];
updateArray(arr);
console.log(arr); // Output: [1, 2, 3, 4]


//answer30//
(function () {
  var counter = 0;

  function increment() {
    counter++;
    console.log(counter);
  }

  increment(); // Output: 1
  increment(); // Output: 2
})();

increment(); // Error: increment is not defined


(function () {
  var message = "Hello, World!";
  console.log(message);
})();


//answer31//
<!DOCTYPE html>
<html>
  <head>
    <title>Add Heading Example</title>
    <script>
      function addHeading() {
        var newHeading = document.createElement("h1");
        newHeading.textContent = "MERN stack";

        var button = document.getElementById("myButton");
        button.insertAdjacentElement("beforebegin", newHeading);
      }
    </script>
  </head>
  <body>
    <button id="myButton" onclick="addHeading()">Add Heading</button>
  </body>
</html>
























