// Error-Based Debugging:

// Fix the following code to ensure the closure retains access to the correct variable:

// function createIncrementers() {
//     let result = [];
//     for (var i = 0; i < 3; i++) {
//         result.push(() => i);
//     }
//     return result;
// }
// console.log(createIncrementers()[0]()); // Expected Output: 0


function createIncrementers(){
    const result=[];
    for (var i = 0; i < 3; i++) {
        result.push(()=>0);   
    }
    return result;
}
console.log(createIncrementers()[0]());

//in this code we need to push directly 0 as a result


