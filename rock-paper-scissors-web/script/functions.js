//function set

import { allObj } from "./objects.js";

function PrintAndWait(id, text, timewait) {
    setTimeout(() => {
        document.getElementById(id).textContent = text;
    }, timewait);
}

function CreateBlock(blocktype, blockid, blocktext) {
    try{
        const existing = document.getElementById(blockid);
        if (existing) {
            return existing;
        }
        const block = document.createElement(blocktype);
        block.id = blockid;
        if (blocktype.toLowerCase() !== "audio") {
            block.textContent = blocktext;
        }
        document.body.appendChild(block);
        return block;
    }
    catch(error){
        console.error("block not found")
    }
}

function BlockVisiblity(display, ...blocks) {
    blocks.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = display;
            console.log("Hiding block: " + id);
        }
        else{
            console.error("Element not found" + id)
        }
    });
}

function ExitGame() {
    CreateBlock("button", "exit-screen", "Exit Game");
    document.getElementById("exit-screen").onclick = function() {
    PrintAndWait("greeting", `${Randomize(allObj.GoodBye)} Redirecting to Google...`, 500);
    setTimeout(() => {
        window.open("https://www.google.com/", "_parent");
    }, 3000);
    };
}

function Randomize(array) {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function CountDown(triesObj){
    console.log("Starting countdown with player tries: " + triesObj.p + " and computer tries: " + triesObj.c);
    let count = 137;
    document.getElementById("myh1").textContent = count;

    const countdown = setInterval(() => {
        count--;
        if (count > -1) {
            document.getElementById("myh1").textContent = count;
            return;
        }

        clearInterval(countdown);
        CheckHardModeWinner(triesObj.p, triesObj.c);
        BlockVisiblity('none', 'click-me', 'btn1', 'btn2', 'btn3');

    }, 1000);
}

function CreateHardModeAudio(){
    Def.CreateBlock('audio', 'limbo', 'none');
    const audio = document.getElementById('limbo');
    audio.src = '../audio/trouble.mp3';
    audio.autoplay = true;
    audio.load();
    document.querySelector("link").href = "../style/hard.css"; //changes the css style

}


function HarderGameset(ptries, ctries){
    document.getElementById("player-results").textContent = `Your Tries: ${ptries}`;
    document.getElementById("computer-results").textContent = `My Tries: ${ctries}`;
    Def.CreateBlock('button', 'click-me', 'Click Me');
    Def.CreateBlock('audio', 'beep', 'beep')
    Def.CreateHardModeAudio();  
    Def.BlockVisiblity('none', 'hard-ver', 'exit-screen');
}


function CheckHardModeWinner(ptries, ctries){
    let playertries = ptries;
    let cputries = ctries;

    console.log("Checking winner with player tries: " + playertries + " and computer tries: " + cputries);
    if (playertries === cputries) {
        Def.PrintAndWait('greeting', 'It\'s a tie! But I win in harder mode, better luck next time!', 0)
    }
    else if (playertries > cputries && playertries >= 15){
        Def.PrintAndWait('greeting', 'You win? Impossible!. You exceeded my expectations, Congratulations!', 0)
    }
    else {
        Def.PrintAndWait('greeting', 'I Knew You Would Lose! Better luck next time!', 0)
    }
}

export const Def = { 
    Randomize,
    ExitGame,
    BlockVisiblity,
    CreateBlock,
    PrintAndWait,
    CreateHardModeAudio,
    CountDown,
    HarderGameset,
    CheckHardModeWinner    
}