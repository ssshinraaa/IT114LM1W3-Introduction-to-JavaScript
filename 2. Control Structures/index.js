/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here

if (randomNumber > 50) {
    console.log("More than fifty");
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here

if (randomNumber % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here

if (randomNumber % 5 === 0 && randomNumber % 3 === 0) {
    console.log("fizzbuzz");
} else if (randomNumber % 3 === 0) {
    console.log("fizz");
} else if (randomNumber % 5 === 0) {
    console.log("buzz");
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber ? "Even" : "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: You use switch statements when a conditional statements have finite outcomes and can be defined before execution. Switch
// statement is more straightforward compared to if-else statement, which is dynamic

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here

for (let i = 0; i < n; i++) {
    console.log(i + 1);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here

var counter = 0;

while (counter != list.length) {
    console.log(list[counter]);
    counter++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: A do-while loop executes the loop body, then checks the condition. A while loop checks the condition, then the loop body

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here

for (let elements of list) {
    console.log(elements);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here

for (let elements in list) {
    console.log(list[elements]);
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here

list.forEach((element) => console.log(element));

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: For of - Iterating arrays, strings, maps, sets, etc.
// For in - Iterating enumerable keys in an object
// For each - Iterating arrays

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
try {
    const numerator = Math.floor((Math.random() * 100) + 1);
    const denominator = Math.floor((Math.random() * 5));
   
    const result = numerator / denominator;
    console.log("Division result:", result);
   } catch (error) {
    if (error.message === "Division by zero error") {
      console.error("Error: Cannot divide by zero.");
    } else {
      console.error("An unexpected error occurred:", error);
    }
   } finally {
    console.log("Cleaning up resources...");
   }