import { allObj } from "./objects.js";


//delays the text
function PrintAndWait(id, text, timewait) {
    setTimeout(() => {
        document.getElementById(id).textContent = text;
    }, timewait); // in millisecond
}


//creates a new block
function CreateBlock(blocktype, blockid, blocktext) {
    try{
        const block = document.createElement(blocktype);
        block.id = blockid;
        block.textContent = blocktext;
        document.body.appendChild(block);
        return block;
    }
    catch(error){
        console.error("block not found")
    }
}



//hides or shows blocks, 'none' = hide, 'block' = show
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



//exits the game
function ExitGame() {

    CreateBlock("button", "exit-screen", "Exit Game");
    

    document.getElementById("exit-screen").onclick = function() {
    PrintAndWait("greeting", `${Randomize(allObj.GoodBye)} Redirecting to Google...`, 500);
        
    setTimeout(() => {
        window.open("https://www.google.com/", "_parent");
    }, 3000);
    };

}

//randomize the content of an array and return it
function Randomize(array) {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}

function PointTakerBtn(ptries){
    let remainingTries = ptries;

    
    document.getElementById('click-me').onclick = function(){
            remainingTries--;
            

            
            const beep = document.getElementById('beep');
            beep.src = '../audio/beep.mp3';
            beep.autoplay = true;
            beep.load();
            
            document.getElementById("player-results").textContent = `Your Tries: ${remainingTries}`;
            document.getElementById("computer-results").textContent = `Your Tries: ${computerTries}`;
            console.log(remainingTries)
            return remainingTries;
            }
            
        }
    
function CountDown(){

    let count = 137;
    const countdown = setInterval(() => {
    count--;
    
    if (count < 0) {
        clearInterval()
        Def.PrintAndWait('greeting', 'unc you trippin', 0)

        setTimeout(() =>{
        window.open('https://youtu.be/GkHd1d_UVOE?si=Y-lviaI1XDX74CBT', '_self');
        },3000)

    }
    document.getElementById("myh1").textContent = count;

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


function HarderGameset(){
            document.getElementById("player-results").textContent = `Your Tries: ${ptries}`;
            document.getElementById("computer-results").textContent = `My Tries: ${ctries}`;
            Def.CreateBlock('button', 'click-me', 'Exit Game');
            Def.CreateBlock('audio', 'beep', 'beep')
            Def.CreateHardModeAudio();  
            Def.BlockVisiblity('none', 'exit-screen', 'hard-ver');
            Def.CountDown()
}



export const Def = { 
        Randomize,
        ExitGame,
        BlockVisiblity,
        CreateBlock,
        PrintAndWait,
        CreateHardModeAudio,
        PointTakerBtn,
        CountDown,
        HarderGameset    
    
    
    }
