import {allObj} from "./objects.js";
import {Def} from "./functions.js";


/*
bugs:
-----------------------------------------------------------------

1. harder button not working--------------------> done ✅
2. harder game logic not working correctly
3. harder game logic not updating the points correctly


*/








let ptries = 0;
let ctries = 0;



//-----------------------------------------------------------------------------------------------------------//
//Game
export function InitGame(){


    
    const buttons = document.querySelectorAll(".choice");

        //listens on every button
        buttons.forEach(button =>  {
            console.log(button)
            button.addEventListener("click", (det) => {

                let playerchoice = det.target.value;
                let computerchoice = Def.Randomize(allObj.choices);

                GameLogic(playerchoice, computerchoice);
                Def.PrintAndWait("choice", `You chose ${playerchoice}. I chose ${computerchoice}.`, 0);
                console.log('prties in initgame', ptries);

                CreatAndSwitchLogic(ptries, ctries, playerchoice, computerchoice);


                return playerchoice;

            }   
        );  
    });
}

//-----------------------------------------------------------------------------------------------------------//



export function HarderGameLogic(playerchoice, computerchoice){

    ptries = 0;
    ctries = 0;
    const hardbtn = document.getElementById("hard-ver");

    hardbtn.addEventListener("click", ()=>{


        Def.HarderGameset(ptries, ctries);
        Def.PointTakerBtn(ptries, ctries)  // ONLY THIS LINE CHANGED
try {

    if (playerchoice === computerchoice) {
        document.getElementById("greeting").textContent = Def.Randomize(allObj.NeutralGame);
    }

    else if (computerchoice === allObj.win[playerchoice]) {
        ptries++;

        document.getElementById("greeting").textContent = Def.Randomize(allObj.GoodGame);
        document.getElementById("player-results").textContent = `Your Tries: ${ptries}`;


    return ptries;
    }else{
        ctries++;
        document.getElementById("greeting").textContent = Def.Randomize(allObj.BadGame);
        document.getElementById("computer-results").textContent = `My Tries: ${ctries}`;
        return ctries;
    }

    Def.PointTakerBtn(ptries)
    




} catch (error) {
        console.error("An error occurred in GameLogic: ", error);
        document.getElementById("greeting").textContent = "An error occurred. Please try again.";
}
        return ptries;
        return ctries;
    })
}







 let running = true;


//-----------------------------------------------------------------------------------------------------------//
//game logic
function GameLogic(playerchoice, computerchoice) {

   

if (!running){
    return false;
}

try {

    if (playerchoice === computerchoice) {
        document.getElementById("greeting").textContent = Def.Randomize(allObj.NeutralGame);
    }

    else if (computerchoice === allObj.win[playerchoice]) {
        ptries++;

        document.getElementById("greeting").textContent = Def.Randomize(allObj.GoodGame);
        document.getElementById("player-results").textContent = `Your Tries: ${ptries}`;


    return ptries;
    }else{
        ctries++;
        document.getElementById("greeting").textContent = Def.Randomize(allObj.BadGame);
        document.getElementById("computer-results").textContent = `My Tries: ${ctries}`;
        return ctries;
    }



} catch (error) {
        console.error("An error occurred in GameLogic: ", error);
        document.getElementById("greeting").textContent = "An error occurred. Please try again.";
}
}



function CreatAndSwitchLogic(ptries,ctries, playerchoice, computerchoice){
    let playertries = ptries;
    let cputries = ctries;

            if(playertries === 10 || cputries === 10){
                Def.CreateBlock("button", "hard-ver", "harder?");
                HarderGameLogic(playerchoice, computerchoice);
                running = false
                return running;
             }

    
}