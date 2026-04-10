import {CheckUsername} from "./functions.js";

export function setupUsername(username) {
    username = document.getElementById("username").value;
    console.log("Username entered: " + username);
    CheckUsername(username);
    return username;
}