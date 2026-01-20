let heading = document.getElementById("heading");
heading.style.color = "blue";
heading.innerText = "Functions and Loops in JavaScript";
// to know the tag
console.log(heading.tagName);
// to know the classes
console.log(heading);
//access by tag name using query selector
let div = document.querySelector("div");
console.log(div);
// console.log(div.innerText);
let class_access = document.getElementsByClassName("c1");
console.log(class_access);
let tag_access = document.getElementsByTagName("p");
console.log(tag_access);
parseFloat.innerText = "this is changed by js";
let query_heading = document.querySelector("#heading");
console.log(query_heading);
// returns only first match
let query_class = document.querySelector(".c1");
console.log(query_class);
// returns all matches
let query_id_all = document.querySelectorAll("#heading");
console.log(query_id_all);
// returns all matches
let query_class_all = document.querySelectorAll(".c1");
console.log(query_class_all);
console.log(query_class_all[1]);
// innerText vs innerHTML
let inner_text = document.getElementById("innerText");
