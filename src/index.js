// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function(x){
//   return x * 2;
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function(num){
//   return num < 10
// });
//  console.log(newNumbers);

// var newNumbers = [];
// numbers.forEach(function(num){
//   if(num < 10){
//     newNumbers.push(num);
//   }
// })
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;
// numbers.forEach(function (currentNumber){
//   newNumber  += currentNumber;
// })
// console.log(newNumber);

// var newNumber = numbers.reduce(function(accumulate, currentNumber){
//   console.log("accumulator = " + accumulate);
//   console.log("accumulator = " + currentNumber);

//   return accumulate + currentNumber;
// })

//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num){
//   return num > 10;
// })
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
