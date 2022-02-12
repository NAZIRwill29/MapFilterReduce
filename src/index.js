import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

var numMap = numbers.map((num) => num);

console.log("map = " + numMap);

//Filter - Create a new array by keeping the items that return true.

var numFilter = numbers.filter((num) => num > 10);

console.log("filter = " + numFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

var numReduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

console.log("reduce = " + numReduce);

//Find - find the first item that matches from an array.

var numFind = numbers.find((num) => num > 10);

console.log("find = " + numFind);

//FindIndex - find the index of the first item that matches.

var numFindIndex = numbers.findIndex((num) => num > 10);

console.log("findIndex = " + numFindIndex);

emojipedia.map((info) => console.log(info.meaning.substring(0, 100)));
