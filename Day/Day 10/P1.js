// Checking conditions in arrays
const nums = [2,4,6,7];
const hasOdd = nums.some(n=>n%2!==0);
console.log(hasOdd);

const hasEven = nums.some(n=>n%2===0);
console.log(hasEven);

// Sorting and reversing
// sort
const nums2 = [10,2,5,20];
const names = ["Rakesh","Bipin","Suresh","Ankita","Keerthi"];
console.log(names);
console.log(names.sort());
nums2.sort();
console.log(nums2);
console.log(nums2.sort((a,b)=>a-b));
console.log(nums2.sort((a,b)=>b-a));

console.log(nums2.reverse());

// Joining and splitting
// join – array to string
const arr = ["a", "b", "c"];
const str1 = arr.join();      // "a,b,c"
console.log(str1);
const str2 = arr.join(" - "); // "a - b - c"
console.log(str2);

// split – string to array
const text = "apple,banana,cherry";
const fruits = text.split(",");
console.log(fruits);

// Flattening nested arrays
// flat
const nested = [1, [2, 3], [4, [5, 6]]];
const flat1 = nested.flat();  // [1, 2, 3, 4, [5, 6]]
console.log(flat1);
const flat2 = nested.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(flat2);


// flatMap – map then flatten one level
const sentences = ["hello world", "good morning"];
const words = sentences.flatMap(s => s.split(" ")); // ["hello", "world", "good", "morning"]
console.log(words);

// skip values
const [x, , z] = [1, 2, 3]; // x = 1, z = 3
// rest elements
const [head, ...rest] = [1, 2, 3, 4]; // head = 1, rest = [2, 3, 4]
// default values
const [p, q = 99] = [5]; // p = 5, q = 99

// . Spread and rest with arrays
// Spread – expand array
const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b]; // [1, 2, 3, 4]
console.log(combined);

// Useful in function calls:
function sum(x, y, z) {
return x + y + z;
}
const nums3 = [1, 2, 3];
console.log(sum(...nums3)); // 6