// Promise: is an object that represents a future value. 
// It stands for a result that is not available yet but will be 
// available later.

// Movie : Day 1 Show 1 : Theatre in ticket disbursal. 
// 30.08.2026 : 2 tickets: 1000rs
// Promise by RBI: Rs. 500/- | Rs. 500 on a sheet


// When is promise is created: one of three states:
    // 1. Pending: not finished yet
    // 2. Fulfilled (resolve): completed succussfully with a value
    // 3. Rejected: failed with an error

// Basic Promise creation
const promise = new Promise(function(resolve,reject){
    // Some functionality
    // some computation / data fetch
    const success = false;
    if (success) {
        resolve("Data Loaded");
        console.log("Promise Resolved");
    }
    else{
        console.log("Promise Rejected");
        reject(new Error("Failed to load"));
    }
});


//Promise chaining
// ATM: 1Insert card -> 2enter PIN -> 3Show Menu -> 4Withdraw -> 5Savings/Current -> 
// 6Rs. 10,000/- -> 7Checks if have valid amount
fetchData()
.then(function(data){
    return process(data);
})
.then(function(processed){
    console.log("Final Result",processed);
})
//error condition
.catch(function(err){
    console.log("Error:" ,err);
})