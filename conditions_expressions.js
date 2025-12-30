let age = 18;
//check if age betweem 10 &  --> range check
if(age >= 10 && age <= 20) {
    console.log("Age is between 10 and 20");
}
else{
    console.log("age is not between 10 and 20");
}

//switch case
let rating = 3;
switch(rating) {
    case 1:console.log("You rated 1 star");
    break;
    case 2:console.log("You rated 2 star");break;
    case 3:console.log("You rated 3 star");break;
    case 4:console.log("You rated 4 star");break;
    case 5:console.log("You rated 5 star");break;
}
//ternary operator
let marks = 75;
marks = Number.parseInt(marks);
let result = (marks >= 40) ? "Pass" : "Fail";
console.log(result);

// && || --> and or operators
let num = 15;
if(num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by both 3 and 5");
}
if(num % 3 === 0 || num % 5 === 0) {
    console.log("Divisible by either 3 or 5");
}