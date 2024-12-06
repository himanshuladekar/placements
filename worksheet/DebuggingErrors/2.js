let a = "10";
let b = "5";
console.log(a + b); // Expected Output: 15

// in above question numbers are added with string so javascript will take this as string concat and do not add this 
//so to make it possible we can change the values or convert it into 

let a = "10";
let b = "5";
console.log(Number(a) + Number(b));
