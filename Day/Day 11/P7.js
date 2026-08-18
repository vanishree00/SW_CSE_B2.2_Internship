// Async keyword:  this keyword makes a synchrous function into 
// an asynchronous code

async function myFunction(){
    return 42;
}
const result = myFunction();
console.log(result);

// await keyword: pauses the execution of the async function until the 
// promise reaches either the resolve state or reject state

async function getData() {
    const promise = Promise.resolve("Hello");

    const value = await promise;
    console.log(value);
}
getData();