// Error-Based Debugging: Fix this code:
// const nums = [10, 20, 30];
// const result = nums.map((n) => n / 0).filter((n) => n > 0); // Bug: Improper math operation
// console.log(result.reduc

const nums = [10, 20, 30];
const result = nums.map((n) => n / 1).filter((n) => n > 0); // Corrected math operation
console.log(result.reduce((acc, val) => acc + val, 0)); // Properly call reduce

