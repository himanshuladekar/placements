// Write a function that takes an array of numbers and returns an object with the count of odd and even numbers.

// Input: [1, 2, 3, 4, 5]
// Expected Output: { odd: 3, even: 2 }

function countOddEven(numbers) {
    return numbers.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even++;
        } else {
            acc.odd++;
        }
        return acc;
    }, { odd: 0, even: 0 });
}

const input = [1, 2, 3, 4, 5];
const result = countOddEven(input);
console.log(result); 
