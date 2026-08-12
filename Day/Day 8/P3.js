// JS Datatypes
// Primitive Data Type:
    // 1. String
    // 2. Number
    // 3. Bigint
    // 4. Boolean
    // 5. Undefined
    // 6. Null
    // 7. Symbol
// Non - Primitive Data types:
    // 1. Object
    // 2. Array
    // 3. Function

// Primitive Data Type
    // 1. String
    let name = "Rakesh"; 
    // 2. Number
    let age = 22; 
    // 3. Bigint
    let bigNumber = 1234567876543;
    // 4. Boolean
    let isActive = true;
    // 5. Undefined
    let value;
    // 6. Null
    let result = null;
    // 7. Symbol
    let id = Symbol("id");

    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof bigNumber);
    console.log(typeof isActive);
    console.log(typeof value);
    console.log(typeof result);
    console.log(typeof id);
   
// Non - Primitive Data types:
    // 1. Object
    let person = {
        name: "Rakesh",
        age: 36
    };
    // 2. Array
    let fruits = ["apple","mango","Banana"]
    // 3. Function
    function greet() {
        return "Hello";
    }