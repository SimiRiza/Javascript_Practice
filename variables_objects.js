// let variable vs const variable vs var variable
let varVariable = 10;
console.log("varVariable:", varVariable);
// re-assigning var variable
varVariable = 20;
// let varVariable = 25; //Uncommenting this line will cause SyntaxError as redeclaration is not allowed
console.log("Updated varVariable:", varVariable);
const constVariable = 30;
console.log("constVariable:", constVariable);
// constVariable = 40; //Uncommenting this line will cause TypeError
var varVariable2 = 50;
console.log("varVariable2:", varVariable2);
var varVariable2 = 60;
console.log("Re-declared varVariable2:", varVariable2);
// print all
console.log("final values: ","varvariable", varVariable, "constVariable", constVariable, "varVariable2", varVariable2)
console.table({varVariable, constVariable, varVariable2});
// prints in tabular format with varable names as headers
console.table([varVariable, constVariable, varVariable2]);
// prints in tabular format without variable names as headers instead with index as headers
//concatanate string & number
let stringVar="My age is ";
let age=25;
console.log(stringVar + age);
console.log(typeof(stringVar + age));

//const object
const obj = {
    name: "xyz",
    age: 30,
};
console.log(obj);
obj.age = 31;
console.log("After updating age:");
console.log(obj);
// obj = {
//     name: "abc",
//     age: 33,
// };
 //TypeError: Assignment to constant variable.
console.log("adding new property to const object:");
obj.city = "Unknown";
console.log(obj);

// dictionary like object
let dictObj = {
    first_name: "John",
    "last name": "thomas",
    age: 28,
};
console.log("Accessing dictionary like object properties:");
console.log("First Name:", dictObj['first_name']);
console.log("Last Name:", dictObj["last name"]);// access using bracket notation
console.log("Age:", dictObj.age);//access using dot notation

// table to print 
console.table(dictObj);// prints in tabular format with property names as headers
console.log([dictObj]);// prints array with names and values

