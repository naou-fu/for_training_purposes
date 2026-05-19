//main script

import {allObj} from "./objects";
import {InitGame} from "./game";
import {Def} from "./functions";

function validateUsername(name) {
    if (!name || name.trim() === "") {
        window.alert("username cannot be empty");
        return false;
    }
    if (name.length < 2 || name.length > 20) {
        window.alert("username must be between 2 and 20 characters");
        return false;
    }
    if (/[^a-zA-Z0-9\s]/.test(name)) {
        window.alert("username cannot contain special charater");
        return false;
    }
    const forbidden = ["youtube"];
    if (forbidden.includes(name.toLowerCase())) {
        if (name.toLowerCase() === "youtube") {
            window.open("https://www.youtube.com/", "_blank");
            return false;
        }
    }
    return true;
}

function initApp() {
    try {
        Def.BlockVisiblity('none',"btn1", "btn2", "btn3","player-results", "computer-results"); 
        const usernameInput = document.getElementById("username");
        const submitBtn = document.getElementById("btn-submit");
        const harderBtn = document.getElementById("hard-ver")
            if (!usernameInput || !submitBtn) {
                throw new Error("Required elements not found in DOM.");
            }

        submitBtn.addEventListener("click", () => {
            const nameValue = usernameInput.value.trim();
            if (!validateUsername(nameValue)) return;

            Def.BlockVisiblity('none', "username", "btn-submit", "label-username");
            Def.BlockVisiblity('block',"btn1", "btn2", "btn3","player-results", "computer-results");
            Def.PrintAndWait("greeting", `${Def.Randomize(allObj.greetings)} ${nameValue}!`, 1000); // prints greetings within 1 sec
            Def.PrintAndWait("greeting", `${Def.Randomize(allObj.challenges)}`, 3000); // prints chalenges within 3 sec
            
            InitGame();
            Def.ExitGame();

        });
    } catch (error) {
        console.error("Error initializing app:", error);
        alert("Failed to load the game. Please refresh.");
    }
}

document.addEventListener("DOMContentLoaded", initApp);