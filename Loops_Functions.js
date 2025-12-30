const marks={
    math: 85,
    science: 90,
    english: 78
};
//print marks 
for(let sub in marks){
    console.log("Marks in", sub , ":", marks[sub]);
}
console.log("Using Object.keys() to iterate over marks:");
for(let i =0;i<Object.keys(marks).length;i++){
    console.log("Marks in", Object.keys(marks)[i] , ":", marks[Object.keys(marks)[i]]);
}

// enter number till correct input is given
// the following code requires prompt which is not supported in some environments
// let num = 10;
// while(true){
//     let userInput = prompt("Enter the number 10 to exit:");
//     userInput = Number.parseInt(userInput);
//     if(userInput === num){
//         console.log("Correct input! Exiting loop.");
//         break;
//     }
// else{
//     console.log("Incorrect input, try again.");
// }
// }

// mean of 5 numbers using arrow function 
let sum = 0;
const mean = (a,b,c,d,e)=>{
    sum = a + b + c + d + e;
    return sum/5;
}
console.log("Mean of 5 numbers:", mean(10,20,30,40,50));

// mean using function declaration
function meanFunc(a,b,c,d,e){
    let total = a + b + c + d + e;
    return total/5;
}
console.log("Mean using function declaration:", meanFunc(15,25,35,45,55));

