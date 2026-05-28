//main script
import {allObj} from "./objects.js";
import {InitGame} from "./game.js";
import {Def} from "./functions.js";

console.log("Main script loaded successfully.");


// local cache for user data — initialize to safe empty arrays
let users = { usernames: [], scores: [] };

fetch('/data')
    .then(response => response.json())
    .then(data => {
        users = {
            usernames: data.users.map(user => user.username),
            scores: data.users.map(user => user.score)
        };
        console.log("Fetched users:", users);
        

    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });




let exists = false;
let currentUser = null;

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
    if(users && users.usernames.includes(name)){
        exists = true;
        return exists;
    }else{
        let score = 0;
        NewUser(name);
    }
    return true;
}

function NewUser(name){
    
    fetch('/data',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: name,
            score: 0
        })
    })

    .then(response => response.json())
    .then(data => {
        console.log("User created:", data);
        // Keep the local user cache in sync after creating a new user.
        if (users) {
            users.usernames.push(name);
            users.scores.push(0);
        }
    })
    .catch(error => {
        console.error("Error creating user:", error);
    });
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
            currentUser = nameValue;

            Def.BlockVisiblity('none', "username", "btn-submit", "label-username");
            Def.BlockVisiblity('block',"btn1", "btn2", "btn3","player-results", "computer-results");
            if (exists === true){
                Def.PrintAndWait("greeting", `${Def.Randomize(allObj.welcomeback)} ${nameValue}!`, 1000);
                Def.PrintAndWait("score", `${users.scores[users.usernames.indexOf(nameValue)]}`, 0);
            }else{
                Def.PrintAndWait("greeting", `${Def.Randomize(allObj.greetings)} ${nameValue}!`, 1000);
            }

            
            Def.PrintAndWait("greeting", `${Def.Randomize(allObj.challenges)}`, 3000); // prints chalenges within 3 sec
            

            InitGame(currentUser);
            Def.ExitGame();

        });
    } catch (error) {
        console.error("Error initializing app:", error);
        alert("Failed to load the game. Please refresh.");
    }
}

document.addEventListener("DOMContentLoaded", initApp);