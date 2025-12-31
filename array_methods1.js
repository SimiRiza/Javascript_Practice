const arr = [1, 2, 3];

// print the sum of all elements in the array
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  sum += arr[i];
}
console.log("Sum:", sum);
// push pop shift unshift
arr.push(6);// add 6 at the end
console.log("After push 6:", arr);
// add element in end
arr[arr.length] = 20;
console.log("After adding 20 manually at the end:", arr);

const poppedElement = arr.pop(); // remove last element and return it
console.log("After pop:", arr, "Popped Element:", poppedElement);

arr.unshift(10); // add 10 at the beginning
console.log("After unshift:", arr);

const shiftedElement = arr.shift();// remove first element and return it
console.log("After shift:", arr, "Shifted Element:", shiftedElement);

// slice and splice
const slicedArray = arr.slice(1, 4); // extract elements from index 1 to 3
console.log("Sliced Array (1 to 4):", slicedArray);
console.log("Original Array after slice:", arr);

// remove 2 elements from index 1
arr.splice(1, 2);
console.log("After removing 2 elements at index 1 using splice:", arr);

arr.splice(2, 1, 15, 25); // at index 2, remove 1 element and add 15 and 25
console.log("After splice:", arr);

// add 2 elements after index 1
arr.splice(1, 0, 30, 40);
console.log("After adding 2 elements at index 1 using splice:", arr);

// indexOf and includes
const index = arr.indexOf(15);//store index of 15
console.log("Index of 15:", index);//print index
console.log("index of 40 is:", arr.indexOf(40));//print index of 40 without storing
console.log("Does array include 25?", arr.includes(25));//check if 25 is present

// map and filter
const mappedArray = arr.map((element) => element * 2); // double each element
console.log("Mapped Array (elements doubled):", mappedArray);
const filteredArray = arr.filter((element) => element > 20); // elements greater than 20
console.log("Filtered Array (elements > 20):", filteredArray);

// reduce
const reducedValue = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum of all elements
// multiply all elements
const brr = [1,2,3,4];
const mul = brr.reduce((m,val)=>m*val,1);
console.log("Reduced Value (sum of elements):", reducedValue);
console.log("Reduced Value (product of elements):", mul);





