// Error-Based Debugging: Fix this code:
// const obj = {
//     name: "Alice",
//     greet: () => {
//         console.log(`Hello, ${this.name}`); // Bug: Arrow function doesn't bind `this`
//     }
// };

// obj.greet();


const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

obj.greet(); 


