let btn = document.getElementById("a-btn");
let sbtn = document.getElementById("s-btn");
let prom = document.getElementById("prompt");
let addOp = document.getElementById("add-op");
let an1 = document.getElementById("a-n1");
let an2 = document.getElementById("a-n2");
let sn1 = document.getElementById("s-n1");
let sn2 = document.getElementById("s-n2");
let subOp = document.getElementById("sub-op");
let resultadd = document.getElementById("result-add");
let resultsub = document.getElementById("result-sub");
btn.addEventListener("click",function add(){
    addOp.innerText="You chose addition";
    let num1 = parseFloat(an1.value);
    let num2 = parseFloat(an2.value);
    let sum = num1 + num2;
   // show the result use only js
   resultadd.innerText="The sum of "+num1+" and "+num2+" is "+sum;
});
sbtn.addEventListener("click",function sub(){
    subOp.innerText="You chose subtraction";
    let num1 = parseFloat(sn1.value);
    let num2 = parseFloat(sn2.value);
    let difference = num1 - num2;
    resultsub.innerText="The difference of "+num1+" and "+num2+" is "+difference;
});