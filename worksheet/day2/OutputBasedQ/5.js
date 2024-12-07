// Write a constructor function to create a Person object with a method that logs the name using this.

// Input: new Person("Alice")
// Expected Output: My name is Alice

function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log(`My name is ${this.name}`);
    }.bind(this);
}

const person = new Person("Alice");
person.greet(); 


