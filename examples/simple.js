// Simple example shows how functions that do arithmetic operations are used.


// Function definitions
const double = (x) => x + x;
const square = (x) => x * x;


// Without pipe operator example 1.
(() => {
  const x = 2;
  const x2 = double(x);
  const x3 = double(x2);
  const sq = square(x3);
  
  console.log("Result of no pipe example1:")
  console.log(sq);
})();


// Without pipe operator example 2.
(() => {
  
  const x = 2;
  const sq = square(double(double(x)));
  
  console.log("Result of no pipe example2:")
  console.log(sq);
})();


// With pipe operator
(() => {
  const x = 2;
  const sq = x
  |> double(%)
  |> double(%)
  |> square(%);
  
  console.log("Result of pipe example:")
  console.log(sq);
})()

