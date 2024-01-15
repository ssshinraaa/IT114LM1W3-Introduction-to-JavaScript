/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

var imy = "I miss you";
console.log(imy);

// TODO 1.2 Use the let keyword to define a variable.
// Your code here

let luckyNumber = 69;
console.log(luckyNumber);

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here

const boolTrue = true;
console.log(boolTrue);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: The keywords var and let is interchangeable, although var can be changed anytime the user wants to, while the let keyword
// is only interchangeable within a block, and the changed variable can only be declared in a different name. The keyword const
// is from the word itself, behaves like a constant. Unlike the two keywords mentioned, const is unchangeable.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here

let num1 = 17;
let num2 = 3;

let sum = num1 + num2;
console.log("Sum: ", sum);

let difference = num1 + num2;
console.log("Difference: ", difference);

let product = num1 * num2;
console.log("Product: ", product);

let quotient = num1 / num2;
console.log("Quotient: ", quotient);

let remainder = num1 % num2;
console.log("Remainder: ", remainder);

let exponent = num1 ** 2;
console.log("Exponent: ", exponent);

let numIncrement = 10;
++numIncrement;
console.log("Incremeted Number: ", numIncrement);

let numDecrement = 5;
--numDecrement;
console.log("Decremented Number: ", numDecrement);

// Checkpoint 1.2 What operators did you use?
// Answer: I used addition, subtraction, multiplication, division, increment, and decremenet opearators
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here

let firstName = "Tristan";
let lastName = "Pogi";
let fullName = firstName + " " + lastName;
console.log("Hello, my name is ", fullName);

let binabati = "Sup";
binabati += " my bro";
console.log("Si idol pala to eh. ", binabati);

let age = 19;
console.log("I am ", age, " years old");

// Checkpoint 1.3 What operators did you use?
// Answer: I use a concatenation operator and a concatenation assignment operator

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here

let ageLimit = 30;
let hasTicket = true;
let isMember = false;

if (ageLimit >= 18 && hasTicket) {
    console.log("Welcome to the concert!!!");
} else {
    console.log("You don't meet the requirements to enter the concert");
}

if (isMember || age <= 12) {
    console.log("You get a discount!!!");
} else {
    console.log("You don't get a discount");
}

if (!isMember) {
    console.log("How about joining our club?");
}

// Checkpoint 1.4 What operators did you use?
// Answer: I use the operators AND, OR, and NOT 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators

let num3 = 30;
let num4 = 40;
let sampleBoy = "Jonathan";
let sampleGirl = "Alice";

console.log("30 == '30': ", num3 == "30");
console.log("30 === '30': ", num3 === "30");
console.log("sampleBoy != sampleGirl: ", sampleBoy != sampleGirl);
console.log("30 !== '30': ", num3 !== "30");
console.log("num4 > num3: ", num4 > num3);
console.log("num3 < num4: ", num3 < num4);
console.log("num3 >= 30: ", num3 >= 30);
console.log("num4 <= 40: ", num4 <= 40);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: Based on what I've searched, the given statement evaluates to be true because JavaScript has the concept of truthy
// and falsy values. Empty arrays (like []) are considered false in a boolean context, which means that they behave in a false 
// conditional statements and evaluations. Also, as JavaScript converts the empty array into a boolean value, it attempts to coerce a 
// variable into a common type. Hence, the given statement became true because [] == false, which can be read as false == false,
// which is true

// Your code here

console.log([] == false);