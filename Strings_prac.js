// printing spl characters in strings
let s1 = "Hello\nWorld"; // New line
let s2 = "Hello\tWorld"; // Tab space
let s3 = "Hello\\World"; // Backslash
console.log("String with New Line:", s1);
console.log("String with Tab Space:", s2);
console.log("String with Backslash:", s3);
let s4 = 'I\'m writing sentence with single quote'; // Single quote
let s5 = "\"Hello!\""; // Double quote
console.log(s5);  
console.log("String length:", s5.length); // Length of string
console.log(s4);

//starts with , ends with, includes
let str = "JavaScript is a versatile language.";
console.log("Does the string start with 'JavaScript'? :", str.startsWith("JavaScript"));
console.log("Does the string end with 'language.'? :", str.endsWith("language."));
console.log("Does the string include 'versatile'? :", str.includes("versatile"));

//lower case , uppercase
let str1 = "Hello World!";
console.log("Lowercase:", str1.toLowerCase());
console.log("Uppercase:", str1.toUpperCase());

//slice
let str2 = "0123456_500_121314";
let n = str2.slice(8, 11);
n=Number.parseInt(n);
console.log("Sliced number converted to integer:", n);
console.log("Sliced string (8 to 11):",str2.slice(8, 11)); // "500"
console.log("Sliced string (-6 to end):",str2.slice(-6)); // "121314"
console.log("Sliced string (5 to end):",str2.slice(4)); // "456 500 121314"
console.log("Sliced string (0 to 7):",str2.slice(0,7)); // "123456"

//replace
let str3 = "JavaScript is fun.";
let newStr = str3.replace("JavaScript", "Python");
console.log("Original String:", str3);
console.log("After Replacement:", newStr);

//trim
let str4 = "   Hello World!   ";
console.log("Original String with spaces:'" + str4 + "'");
console.log("After trim:" + str4.trim());
console.log("After trimStart:'" + str4.trimStart() + "'");
console.log("After trimEnd:'" + str4.trimEnd() + "'");

//replace 
let str5 = ">>>>>>>Hello World!<<<<<";
console.log("Original String:", str5);
let replacedStr = str5.replace(/^>+|<+$/g ,"");
console.log("After replacing leading '>' and trailing '<':", replacedStr);
//repeat
let str6 = "Ha! ";
console.log("Repeating string 5 times:", str6.repeat(5));
