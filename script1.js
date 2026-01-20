// append text "from afom solns to id heading" string to h1
let heading = document.getElementById("heading");
heading.innerText += " from afom solns ";
// let div  = document.querySelectorAll(".box");
// console.log(div);
// div[0].innerText = "this is changed by js";
// div[1].innerText = "this is also changed by js";
// to know attributes of an element
console.log(heading.getAttribute("id"));
console.log(heading.getAttribute("class"));
// set attribute of an element
heading.setAttribute("title", "this is heading");
console.log(heading.getAttribute("title"));
// styling using js
heading.style.backgroundColor = "yellow";
// adding elements using js
let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
// append button to body
let div = document.querySelector("div");
//append before end of div
// div.appendChild(newbtn);

// append after start of div
div.after(newbtn);
// remove element using js
// heading.remove();

// give css styling to button using js
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
// 1st element in body tag 
let first_elem = document.querySelector("body");
first_elem.prepend(newbtn);

// add class to element using js
let p = document.querySelector(".para");
p.classList.add("newclass");

// event handling using arrow functions
let btn = document.querySelector("button");
btn.onclick = () => {
    console.log("Button Clicked!");
}
div.onmousehover = () => {
    console.log("Mouse Hovered!");
}
// event listeners 
// btn.addEventListener("click", () => {
//     console.log("Button Clicked using Event Listener!");
// })
// btn.addEventListener("click", () => {
//     console.log("Button Clicked using Event Listener 2!");
// })
// btn.addEventListener("click", () => {
//     console.log("Button Clicked using Event Listener 3!");
// })
// advantage of event listener is we can add multiple event listeners to same element for same event

// removing event listener needs to be reviewed
let body = document.querySelector("body");
let toggle = document.getElementById("toggle");
let mode ="light";
toggle.addEventListener("click", () => {
    if(mode === "light"){
        body.style.backgroundColor = "black";
        body.style.color = "white";
        mode = "dark";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        mode = "light";
    }
});
//