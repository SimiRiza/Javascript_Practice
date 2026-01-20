// Step 1: Catch elements from HTML
let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let list = document.getElementById("taskList");

// Step 2: Add event to button
button.addEventListener("click", addTask);

// Step 3: Function runs when button is clicked
function addTask() {

    // Take text from input
    let taskText = input.value;

    // If input is empty, do nothing
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Step 4: Create a NEW HTML element
    let listItem = document.createElement("li");

    // Put text inside that element
    listItem.innerText = taskText;

    // Step 5: Add the new element to the page
    list.appendChild(listItem);

    // Step 6: Clear input box
    input.value = "";
}
