// Function declaration/definition
function greet(name) {
  console.log("Hello, " + name);
}
greet("Asha");
greet("Riya");

// Function with return value; here a,b are parameters and 5,3 are arguments
function add(a, b) { 
  return a + b;
}
let result = add(5, 3); // 8
console.log(result);

// Single parameter/argument
function square(n) {
  return n * n;
} 
let s = square(6); // 36
console.log(s);

// Function expression
const greeting = function(name) {
  return "Hello, " + name;
};
console.log(greeting("Usha"));


// Arrow functions🌟
// e.g 1
const sum = (a, b) => {
  return a + b;
};
console.log(sum(5,4));

// e.g 2
const sum2 = (a, b) => a + b;
console.log(sum2(5,15));

// Default parameters
function greetings(name = "Guest") {
  return "Hello, " + name;
}
console.log(greetings());        // Hello, Guest
console.log(greetings("Asha"));  // Hello, Asha

//Rest parameters
function sumRest(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}
console.log(sumRest(1, 2, 3, 4, 5));     // 15
console.log(sumRest(10, 20, 30));  // 60

// IIFE (Immediately Invoked Function Expression)
(function() {
 	 console.log("This runs at once");
})();

// Function hoisting
console.log(add2(2, 3)); // works
function add2(a, b) {
  return a + b;
}

//console.log(sub(5, 2)); // error
const sub = function(a, b) {
  return a - b;
};

// Higher order function
function runTwice(fn) {
  fn();
  fn();
}
runTwice(function() {
  console.log("Hello");
});

// Callback functions ⭐
function fetchData(callback) {
  let data = "Some data";
  callback(data);
}
fetchData(function(data) {
  console.log("Received:", data);
});

// Functions returning functions
function createMultiplier(n) {
  return function(x) {
    return x * n;
  };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// `this` in functions
const person = {
  name: "Asha",
  greet() {
    console.log("Hello, " + this.name);
  }
};
person.greet(); // Hello, Asha

// Recursion
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120