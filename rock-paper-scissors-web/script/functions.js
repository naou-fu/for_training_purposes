// Every function needed

// Randomizes an array

export function Randomize(array) {
    let random = array[Math.floor(Math.random() * array.length)];
    console.log("Randomized array: " + random);
    return random;
}


//check is a username in in the correct format

export function CheckUsername(username) {
    switch (username) {
        case "":
            alert("Username cannot be empty. Please enter a valid username.");
            return false;
        case null:
            alert("Username cannot be null. Please enter a valid username.");
            return false;
        case "username":
            alert("Username cannot be 'username'. Please choose a different username.");
            return false;
        default:
            return true;
    }
}

