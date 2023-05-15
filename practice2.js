// var array = ["ankit", "laps", 40, 50.2, true, false];

// // for (var i = 0; i < array.length; i++) {
// //   console.log(`at index : ${i} , value = ${array[i]}`);
// // }

// array.forEach((item, index) => {
//   if (typeof item === "string") {
//     console.log(`item : ${item} , index : ${index} `);
//   }
// });

// var table = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var num = table.map((item, index) => {
//   return 9 * item;
// });

// var filter = table.filter((item, index) => {
//   return item > 6;
// });
// console.log(num);
// console.log(filter);

const functionexport = () => {
  return "from practice2.js!!";
};

module.exports.functionexport = functionexport;
