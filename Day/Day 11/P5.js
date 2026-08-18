// Sychronous: code runs in order, one line after another, 
// and each line must fincsh before the next one starts

// By default the JS is Synchronous: blocks following code from executing
// Queue to purchase movie ticket: 
// BookMyShow: Movie123 -> XYZ Theatre -> 4pm today -> H5 to H10 seats
// Arun & Sagar: milliseconds


console.log("A");
console.log("B");
console.log("M");

// Asynchronous: code can start a task and continue running without waiting
// for the task to finish.
console.log("start");

// setTimeout: is a built-in function that lets you schedule a 
// piece of code to run after a delay. By default it is asynchronous
setTimeout(() => {
    console.log("Inside timeout");
}, 10000);

console.log("end");