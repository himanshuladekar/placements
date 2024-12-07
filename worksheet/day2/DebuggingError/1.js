// Fix the following buggy code:
// function fetchUser(callback) {
//     setTimeout(() => {
//         const user = null; // Should fetch a valid user object
//         callback(user.name); // Bug: Cannot read property 'name'
//     }, 1000);
// }

// fetchUser((name) => console.log(name));


function fetchUser(callback) {
    setTimeout(() => {
        const user = { name: "John Doe" }; // Fetch a valid user object
        if (user) {
            callback(user.name);
        } else {
            callback(null); // Handle the case where user is null
        }
    }, 1000);
}

fetchUser((name) => {
    if (name) {
        console.log(name);
    } else {
        console.log("User not found");
    }
});
