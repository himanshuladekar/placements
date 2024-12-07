// Problem Set for Sort: Error-Based Debugging: Fix this code:

// const nums = [1, 10, 2];
// nums.sort(); // Bug: Incorrect numeric sorting
// console.log(nums);

const nums = [1, 10, 2];
nums.sort((a, b) => a - b); 
console.log(nums); 
