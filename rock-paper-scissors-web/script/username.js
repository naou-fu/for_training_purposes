
import {CheckUsername} from "./conditions.js";

export function setupUsername(username) {
    username = prompt("Please enter your username:");
    console.log("Username entered: " + username);
    CheckUsername(username);
    return username;
}