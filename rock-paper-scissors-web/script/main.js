import {all} from "./objects.js";
import {PrintAndWait, ExitGame, HideBlock, ShowBlock, Randomize} from "./functions.js";
import {Game} from "./game.js";

// Improved username validation with error handling
function validateUsername(name) {
    try {
        if (!name || name.trim() === "") {
            throw new Error("Username cannot be empty.");
        }
        if (name.length < 2 || name.length > 20) {
            throw new Error("Username must be between 2 and 20 characters.");
        }
        if (/[^a-zA-Z0-9\s]/.test(name)) {
            throw new Error("Username can only contain letters, numbers, and spaces.");
        }
        const forbidden = ["username", "youtube"];
        if (forbidden.includes(name.toLowerCase())) {
            if (name.toLowerCase() === "youtube") {
                window.open("https://www.youtube.com/", "_blank");
                return false;
            }
            throw new Error("Seriously? Please enter a valid username.");
        }
        return true;
    } catch (error) {
        alert(error.message);
        console.error("Validation error:", error);
        return false;
    }
}

// Initialize the app with error handling
function initApp() {
    try {
        HideBlock("btn1", "btn2", "btn3","player-results", "computer-results");

        const usernameInput = document.getElementById("username");
        const submitBtn = document.getElementById("btn-submit");

        if (!usernameInput || !submitBtn) {
            throw new Error("Required elements not found in DOM.");
        }

        submitBtn.addEventListener("click", () => {
            const nameValue = usernameInput.value.trim();
            if (!validateUsername(nameValue)) return;

            HideBlock("username", "btn-submit", "label-username");
            ShowBlock("btn1", "btn2", "btn3","player-results", "computer-results");


            console.log("Username entered: " + nameValue);

            PrintAndWait("greeting", `${Randomize(all.greetings)} ${nameValue}!`, 1000);
            PrintAndWait("greeting", `${Randomize(all.challenges)}`, 3000);

            Game();
            ExitGame();
        });
    } catch (error) {
        console.error("Error initializing app:", error);
        alert("Failed to load the game. Please refresh.");
    }
}

// Start the app when DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);