/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here

const firstElement = numbers[0];
const fifthElement = numbers[4];
const lastElement = numbers[(numbers.length)-1];

console.log("First element: ", firstElement);
console.log("Fifth element: ", fifthElement);
console.log("Last element: ", lastElement);

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here

var minValue;
var maxValue;
var aveValue = 0;

for (let elements of numbers) if ((minValue === undefined) || (minValue > elements)) minValue = elements;
for (let elements of numbers) if ((maxValue === undefined) || (maxValue < elements)) maxValue = elements;
for (let elements of numbers) aveValue += elements;
aveValue /= numbers.length;

console.log("Minimum Value: ", minValue);
console.log("Maximum value: ", maxValue);
console.log("Average value: ", aveValue);


// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: They're pretty much the same. The only difference is how they're syntaxed

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here

let IT114L = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    rosterNumber: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here

IT114L.profName = "Job Lipat";
console.log(IT114L.profName);

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here

let currentCourses = [
    {courseCode: "CS107", name: "Information Management", units: 2, rosterNumber: 40, profName: "Dahlia De Mesa"},
    {courseCode: "CS107L", name: "Information Management (Laboratory)", units: 1, rosterNumber: 40, profName: "Adoamr Ilao"},
    {courseCode: "IT114", name: "Web Systems and Technologies", units: 2, rosterNumber: 40, profName: "Mark Anthony Hernandez"},
    {courseCode: "IT114L", name: "Web Systems and Technologies (Laboratory)", units: 1, rosterNumber: 30, profName: "Job Lipat"},
    {courseCode: "IT132", name: "Logic Design and Switching Theory", units: 2, rosterNumber: 40, profName: "Leonnel De Mesa"},
    {courseCode: "IT132L", name: "Logic Design and Switching Theory (Laboratory)", units: 1, rosterNumber: 40, profName: "Leonnel De Mesa"},
    {courseCode: "IT133", name: "Technopreneurship", units: 3, rosterNumber: 40, profName: "Khristian Kikuchi"},
    {courseCode: "HUM039", name: "Ethics", units: 3, rosterNumber: 40, profName: "Jomel Paulo Ebron"}
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here

var totalUnits = 0;

for (let elements of currentCourses) totalUnits += elements.units;
console.log("Total Units: ", totalUnits);

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Python and JavaScript are almost identical, that objects are both defined in the two languages. The only difference is that
// JavaScript uses curly braces to define objects, while Python uses the keyword class to create objects

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here

let newNumbers = [...numbers, 69, 100, 420];
console.log(newNumbers);

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here

let {courseCode, units, ...rest} = IT114L;
console.log(courseCode, units);
export { numbers };
