/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here

let squares = numbers.map((number => number**2));

console.log(squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here

let evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here

let sumNumbers = numbers.reduce((total, number) => total + number);

console.log(sumNumbers);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here

let capsLetters = words.map((word) => word.toUpperCase());

console.log(capsLetters);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here

let moreThanFour = words.filter((word) => word.length >= 4);

console.log(moreThanFour);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here

let concatenateWords = words.reduce((concatenateWords, word) => concatenateWords += word);

console.log(concatenateWords)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map - Transforms each element of an array
// Filter - Selects specific elements of an array
// Reduce - Combines all elements of an array into a single value