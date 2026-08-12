// Operators in JS
// Arithmetic operators
console.log("Arithmetic operators")
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// Assignment operators
console.log("Assignment operators")
let x = 5;
x += 2; // x = x + 2
console.log(x)
x -= 1; // x = x - 1
console.log(x)
x *= 3; // x = x * 3
console.log(x)
x /= 2; // x = x / 2
console.log(x)
x %= 2; // x = x % 2
console.log(x)

// Comparison operators
console.log("Comparison operators")
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(8 <= 7);     // false
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Logical operators
console.log("Logical operators")
let age = 20;
let hasID = true;
console.log(age >= 18 && hasID); // true
console.log(age < 18 || hasID);  // true
console.log(!hasID);             // false

// Unary operators
console.log("Unary operators")
let n = 5;
console.log(+n); // 5
console.log(-n); // -5
// Also includes increment and decrement:
let count = 1;
count++;
console.log(count);
count--;
console.log(count);

// String operators
console.log("String operators")
let firstName = "Vanishree";
let lastName = "Malli";
console.log(firstName + " " + lastName); // Vanishree Malli
console.log(`${firstName} ${lastName}`);
// ` back tick : key below esc key

// Ternary operator
console.log("Ternary operator");
let myage = 16;
let result = myage >= 18 ? "Adult" : "Minor";
console.log(result);

// Nullish coalescing operator
console.log("Nullish coalescing operator");
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Guest

// Optional chaining operator
console.log("Optional chaining operator")
let user = {
profile: {
name: "Asha"
}
};
console.log(user?.profile?.name); // Asha
console.log(user?.address?.city);  // undefined

// Bitwise 
console.log("Bitwise")
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5);    // -6