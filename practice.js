let btn = document.getElementById("calculate");
let opInput = document.getElementById("operation");
let msg = document.getElementById("opMessage");

opInput.addEventListener("input", function displayMessage() {
    let oper = document.getElementById("operation").value;
    if(oper === "add"){
        msg.style.display = "block";
        msg.innerText = "Addition operation selected";
    }
    else if(oper === "sub"){
        msg.style.display = "block";
        msg.innerText = "Subtraction operation selected";
    }
    else if(oper === "mul"){
        msg.style.display = "block";
        msg.innerText = "Multiplication operation selected";
    }
    else if(oper === "div"){
        msg.style.display = "block";
        msg.innerText = "Division operation selected";
    }
});

btn.addEventListener("click", function calculator() {
    let oper = document.getElementById("operation").value;
if(oper === "add"){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    // display on run time on clicking button with id="calculate"
    document.getElementById("result").innerText = "Result: " + result;

}
if(oper === "sub"){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerText = "Result: " + result;
}
if(oper === "mul"){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerText = "Result: " + result;
}
if(oper === "div"){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").innerText = "Result: " + result;
}
});


