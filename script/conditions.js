export const win = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};

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