// Write a function that calculates the sum of three numbers. Use call and apply to invoke it with an object representing a set of numbers.

// Input: Object { a: 1, b: 2, c: 3 }
// Expected Output: 6

function sum(a, b, c) {
    return a + b + c;
}
const numbers = { a: 1, b: 2, c: 3 };
const resultCall = sum.call(null, numbers.a, numbers.b, numbers.c);
console.log(resultCall); 
const resultApply = sum.apply(null, [numbers.a, numbers.b, numbers.c]);
console.log(resultApply); 
const boundSum = sum.bind(null, numbers.a, numbers.b, numbers.c);
console.log(boundSum()); 
const maxNumber = Math.max.apply(null, [1, 2, 3, 4, 5]);
console.log(maxNumber); 
