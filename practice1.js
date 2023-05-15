const prac2 = require("./practice2");

console.log(prac2.functionexport());
// dataypes
var x = "Ankit";
const y = 10;
let z = 10;

//print command
console.log("--start--");

//collective print
console.log(x, y, z);

//printing in a single string
console.log(`x = ${x} , y = ${y} , z = ${z}`);

// if else condiion
console.log("---------------------------");
var shake = "strawberry";

if (shake == "strawberry") {
  console.log(`let's have shake!`);
} else {
  console.log(`I'll pass`);
}

arrays;

var array = ["ankit", "laps", 40, 50.2, true, false];

for (var i = 0; i < array.length; i++) {
  console.log(`at index : ${i} , value = ${array[i]}`);
}

//functions

//arrow function
const myFunction = (p1, p2) => {
  const result = p1 * p2;
  return result;
};

var result = myFunction(3, 4); //call
console.log(result);

//returning multiple parameters
const myFunction2 = () => {
  const place = "Bhutan";
  const food = "Ramen";
  return [place, food];
};

var [place, food] = myFunction2();
console.log(place);

//single liner function
const functionShort = (p1, p2) => p1 * p2;

console.log(functionShort(40, 40));
