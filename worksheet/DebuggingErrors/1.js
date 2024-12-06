function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(10, "5")); // Expected: Error-free calculation

// in above question the error is regarding the width ,we can change the width to number there itself or we can pass number instead of string


function calculateArea(length, width) {
    return length *  Number(width);
}
console.log(calculateArea(10, "5"));


function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(10, 5));