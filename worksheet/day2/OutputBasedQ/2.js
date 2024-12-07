// Create a chain of operations to transform the following array:

// Input: [1, 2, 3, 4, 5]

// Task: Double the even numbers and sum them.

// Expected Output: 12



const input = [1, 2, 3, 4, 5];

const result = input
    .filter(num => num % 2 === 0) // Filter even numbers
    .map(num => num * 2)          // Double the even numbers
    .reduce((sum, num) => sum + num, 0); // Sum them up

console.log(result); // Expected Output: 12


