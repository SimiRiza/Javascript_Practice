let btn = document.getElementById("a-btn");
let sbtn = document.getElementById("s-btn");
let Op = document.getElementById("opSelected");
let an1 = document.getElementById("a-n1");
let an2 = document.getElementById("a-n2");
let result = document.getElementById("result");
btn.addEventListener("click",function add(){
    Op.innerText="You chose addition";
    let num1 = parseFloat(an1.value);
    let num2 = parseFloat(an2.value);
    let sum = num1 + num2;
   // show the result use only js
   result.innerText="The sum of "+num1+" and "+num2+" is "+sum;
});
sbtn.addEventListener("click",function sub(){
    Op.innerText="You chose subtraction";
    let num1 = parseFloat(an1.value);
    let num2 = parseFloat(an2.value);
    let difference = num1 - num2;
    result.innerText="The difference of "+num1+" and "+num2+" is "+difference;
});