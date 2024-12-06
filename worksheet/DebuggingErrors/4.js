// Error-Based Debugging:

// Fix the issue in the following code where the arrow function fails to access the object’s properties:

// const obj = {
//     name: "JavaScript",
//     getName: () => this.name,
// };
// console.log(obj.getName()); // Expected Output: "JavaScript"


const obj={
    name:"Javascript",
    getName(){
        return this.name;
    }
};
console.log(obj.getName());

// in this above solution used return statement as this was not there is question and arrow function is also removed
