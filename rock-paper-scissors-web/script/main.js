import {allObj} from "./objects.js";
import {InitGame} from "./game.js";
import {Def} from "./functions.js";

// Improved username validation with error handling
function validateUsername(name) {

        //checks if the user is empty
        if (!name || name.trim() === "") {
            window.alert("username cannot be empty");
            return false;
        
        //check if the user has more than 2 letters and less than 20
        }
        if (name.length < 2 || name.length > 20) {
            window.alert("username must be between 2 and 20 characters");
            return false;
        }

        //restricts from using special characters
        if (/[^a-zA-Z0-9\s]/.test(name)) {
            window.alert("username cannot contain special charater");
            return false;
        }

        //redirects to youtube
        const forbidden = ["youtube"];
        if (forbidden.includes(name.toLowerCase())) {
            if (name.toLowerCase() === "youtube") {
                window.open("https://www.youtube.com/", "_blank");
                return false;
            }
        }
        return true;

}

// Initialize the app with error handling
function initApp() {
    try {
        Def.BlockVisiblity('none',"btn1", "btn2", "btn3","player-results", "computer-results"); //hides blocks

        const usernameInput = document.getElementById("username");
        const submitBtn = document.getElementById("btn-submit");
        const harderBtn = document.getElementById("hard-ver")
        if (!usernameInput || !submitBtn) {
            throw new Error("Required elements not found in DOM.");
        }

        //waits for the user to click the submit button
        submitBtn.addEventListener("click", () => {
            const nameValue = usernameInput.value.trim();
            if (!validateUsername(nameValue)) return;

            Def.BlockVisiblity('none', "username", "btn-submit", "label-username");  //hides blocks
            Def.BlockVisiblity('block',"btn1", "btn2", "btn3","player-results", "computer-results");  //shows blocks


            console.log("Username entered: " + nameValue);

            Def.PrintAndWait("greeting", `${Def.Randomize(allObj.greetings)} ${nameValue}!`, 1000); // prints greetings within 1 sec
            Def.PrintAndWait("greeting", `${Def.Randomize(allObj.challenges)}`, 3000); // prints chalenges within 3 sec
            

            //starts the game
            InitGame();
            // for exiting the game
            Def.ExitGame();
        });
    } catch (error) {
        console.error("Error initializing app:", error);
        alert("Failed to load the game. Please refresh.");
    }
}

// Start the app when DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);