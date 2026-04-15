import {all} from "./objects.js";
import {PrintAndWait, ExitGame , HideBlock, ShowBlock, Randomize} from "./functions.js";
import {Game} from "./game.js";





//check if a username is in the correct format

    
    HideBlock("btn1", "btn2", "btn3");
    HideBlock("player-results", "computer-results","player-results", 0);

    const usernameInput = document.getElementById("username");
    const submitBtn = document.getElementById("btn-submit");

    submitBtn.onclick = function() {
      let nameValue = usernameInput.value;

        ShowBlock("btn1", "btn2", "btn3", 4000);
        ShowBlock("player-results", "computer-results", "player-results", 4000);
        HideBlock("username", "btn-submit","label-username");


        console.log("Username entered: " + nameValue);
        switch (nameValue){
        case "":
            alert("Username cannot be empty. Please enter a valid username.");
            return false;
        case null:
            alert("Username cannot be null. Please enter a valid username.");
            return false;
        case "username":
            alert("seriosly? Please enter a valid username.");
            return false;
        case "youtube":
            window.open("https://www.youtube.com/", "_blank");
        default:





        PrintAndWait("greeting", `${Randomize(all.greetings)} ${nameValue}!`, 1000);

        PrintAndWait("greeting", `${Randomize(all.challenges)}`, 3000);


        Game();
        ExitGame();


        return nameValue;
}}
