import {all} from "./objects.js";
import {Randomize, PrintAndWait} from "./functions.js";


let ptries = 0;
let ctries = 0;




//Game
export function Game(){
const buttons = document.querySelectorAll(".choice");

    buttons.forEach(button =>  {
        console.log(button)
        button.addEventListener("click", (det) => {

        let playerchoice = det.target.value;
        let computerchoice = Randomize(all.choices);
        
        GameLogic(playerchoice, computerchoice);
        PrintAndWait("choice", `You chose ${playerchoice}. I chose ${computerchoice}.`, 0);

        return playerchoice;

    });
});
}



//game logic
function GameLogic(playerchoice, computerchoice) {

try {
    if (playerchoice === computerchoice) {
        document.getElementById("greeting").textContent = Randomize(all.NeutralGame);

    } else if (computerchoice === all.win[playerchoice]) {
        ptries++;

        document.getElementById("greeting").textContent = Randomize(all.GoodGame);
        document.getElementById("player-results").textContent = `Your Tries: ${ptries}`;

        return ptries;

    } else {
        ctries++;

        document.getElementById("greeting").textContent = Randomize(all.BadGame);
        document.getElementById("computer-results").textContent = `My Tries: ${ctries}`;

        return ctries;
    }

} catch (error) {
        console.error("An error occurred in GameLogic: ", error);
        document.getElementById("greeting").textContent = "An error occurred. Please try again.";
}
}


