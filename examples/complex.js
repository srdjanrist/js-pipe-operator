// A bit more complex example shows how functions from lodash library can be composed

const _ = require('lodash');

// Function definitions
const removeEven = (arr) => _.filter(arr, x => x % 2 != 0);
const addTwo = (arr) => _.map(arr, x => x + 2);
const dropBig = (arr) => _.filter(arr, x => x < 500);

const arr = [140, 135, 102, 51, 88, 92, 12, 486, 315, 533, 706, 206, 688, 840];

// Without pipe operator example.
(() => {
  const evenRemovedArr = removeEven(arr);
  const addedTwoArr = addTwo(evenRemovedArr);
  const droppedBigArr = dropBig(addedTwoArr);

  console.log("Result of no pipe example1:")
  console.log(droppedBigArr);
})();


// Without pipe operator example 2.
(() => {
  const resArr = dropBig(addTwo(removeEven(arr)));
  
  console.log("Result of no pipe example2:")
  console.log(resArr);
})();


// With pipe operator
(() => {
  const resArr = arr
  |> removeEven(%)
  |> addTwo(%)
  |> dropBig(%);
  
  console.log("Result of pipe example:")
  console.log(resArr);
})()

