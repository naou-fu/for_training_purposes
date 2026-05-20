//game set

import {allObj} from "./objects.js";
import {Def} from "./functions.js";

let tries = {p: 0, c: 0};

let SwitchCondition = false;
let normalgame = true;

export function InitGame(){
    const buttons = document.querySelectorAll(".choice");
        //listens on every button
        buttons.forEach(button =>  {
            button.addEventListener("click", (det) => {

                let playerchoice = det.target.value;
                let computerchoice = Def.Randomize(allObj.choices);

                if (normalgame === false){
                    HarderGameLogic(playerchoice, computerchoice);
                }
                GameLogic(playerchoice, computerchoice);
                Def.PrintAndWait("choice", `You chose ${playerchoice}. I chose ${computerchoice}.`, 0);

                return playerchoice;
            }   
        );  
    });


    let checking = setInterval(() => {
        SwitchLogic(tries.p, tries.c);
        if (SwitchCondition === true){
            CreateCheckHardBtn();
            clearInterval(checking);
        }
    }, 0);
}

export function HarderGameLogic(playerchoice, computerchoice){
    try {
        if (playerchoice === computerchoice) {
            document.getElementById("greeting").textContent = Def.Randomize(allObj.NeutralGame);
        }
        else if (computerchoice === allObj.win[playerchoice]) {
            tries.p += 2;
            document.getElementById("greeting").textContent = Def.Randomize(allObj.GoodGame);
            document.getElementById("player-results").textContent = `Your Tries: ${tries.p}`;
            return tries.p;
        }else{
            tries.c += 1;
            document.getElementById("greeting").textContent = Def.Randomize(allObj.BadGame);
            document.getElementById("computer-results").textContent = `My Tries: ${tries.c}`;
            return tries.c;
        }
    } catch (error) {
        console.error("An error occurred in GameLogic: ", error);
        document.getElementById("greeting").textContent = "An error occurred. Please try again.";
    }
    return tries.p;
    return tries.c;
}

function GameLogic(playerchoice, computerchoice) {
    if (!normalgame){
        return false;
    }
    try {

        if (playerchoice === computerchoice) {
            document.getElementById("greeting").textContent = Def.Randomize(allObj.NeutralGame);
        }
        else if (computerchoice === allObj.win[playerchoice]) {
            tries.p++;
            document.getElementById("greeting").textContent = Def.Randomize(allObj.GoodGame);
            document.getElementById("player-results").textContent = `Your Tries: ${tries.p}`;
            return tries.p;
        }else{
            tries.c++;
            document.getElementById("greeting").textContent = Def.Randomize(allObj.BadGame);
            document.getElementById("computer-results").textContent = `My Tries: ${tries.c}`;
            return tries.c;
        }
    } catch (error) {
        console.error("An error occurred in GameLogic: ", error);
        document.getElementById("greeting").textContent = "An error occurred. Please try again.";
    }
}

function SwitchLogic(ptries,ctries){
    let playertries = ptries;
    let cputries = ctries;
    if(playertries === 10 || cputries === 10){
        SwitchCondition = true;
        return SwitchCondition;
    }
}

function CreateCheckHardBtn(){
    if (document.getElementById("hard-ver")) {
        return;
    }
    const hardBtn = Def.CreateBlock('button', 'hard-ver', 'Harder?');

    hardBtn.addEventListener("click", () => {
        tries.p = 0;
        tries.c = 0;
        console.log("harder button clicked")
        Def.HarderGameset(tries.p, tries.c);
        Def.CountDown(tries)
        normalgame = false;

    const clickMeBtn1 = document.getElementById('click-me');
    clickMeBtn1.onmouseover = function(){
        tries.p--;
        tries.c++;
        document.getElementById("player-results").textContent = `Your Tries: ${tries.p}`;
        document.getElementById("computer-results").textContent = `My Tries: ${tries.c}`;
        Def.PrintAndWait('greeting', 'Don\'t touch the \'Click Me\' button', 0)
        console.log(tries.p);
        console.log("point taker working");
        const beep = document.getElementById('beep');
        beep.src = '/beep.mp3';
        beep.autoplay = true;
        beep.load();
        }
    });
}
    
