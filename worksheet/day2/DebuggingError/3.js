// Error-Based Debugging: Fix this code:
// const chars = "aabbc";
// const freq = chars.split("").reduce((acc, char) => {
//     acc[char]++;
//     return acc; // Bug: Initial value missing
// }, {});
// console.log(freq);


const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log(freq);
