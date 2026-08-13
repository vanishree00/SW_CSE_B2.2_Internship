//Arrays

// Creating arrays
// Array literal:
const numbers = [1,2,3,4,5];
const mixed = [1,"hello",true,null,{name:"Asha"}];

console.log(numbers);
console.log(mixed);

// Using Array constructor:
const arr1 = new Array(1,2,3);
const arr2 = new Array(5);

console.log(arr1);
console.log(arr2);

// Empty array:
const newArray = [];
console.log(newArray);

// Accessing elements
const fruits=["apple","banana","cherry"];
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.at(-1));

// Updating elements
const nums=[10,20,30];
nums[1]=25;
console.log(nums);
const arr=[1,2,3];
arr[0]=99;
console.log(arr)
// arr=[4,5,6] not allowed

console.log("Array length:");
const arr3=[100,200,300];
console.log(arr3.length);
arr3.length=2;
console.log(arr3);
console.log(arr3.length);
arr3.length=5;
console.log(arr3);
console.log(arr3.length);

console.log("Adding/removing");
// push(), pop()
// unshift(), shift()
// splice()
const colors=["red","green","blue","yellow"];
colors.splice(2,1);
console.log(colors);
colors.splice(1,0,"orange","purple");
console.log(colors);