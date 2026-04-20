import { all } from "./objects.js";


//delays the text
export function PrintAndWait(id, text, timewait) {
    setTimeout(() => {
        document.getElementById(id).textContent = text;
    }, timewait);
}


//creates a new block
export function CreateBlock(blocktype, blockid, blocktext) {

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



//hides blocks
export function HideBlock(...blocks) {
    blocks.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = "none";
            console.log("Hiding block: " + id);
        }
        else{
            console.error("Element not found" + id)
        }
    });
}


//shows blocks
export function ShowBlock(...blocks) {
    blocks.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = "block";
            console.log("Showing block: " + id);
        } else {
            console.error("Element not found: " + id);
        }
    });
}



//exits the game
export function ExitGame() {

    CreateBlock("button", "exit-screen", "Exit Game");
    

    document.getElementById("exit-screen").onclick = function() {
    PrintAndWait("greeting", `${Randomize(all.GoodBye)} Redirecting to Google...`, 500);
        
    setTimeout(() => {
        window.open("https://www.google.com/", "_parent");
    }, 3000);
    };

}


//randomize the content of an array and return it
export function Randomize(array) {
    let random = array[Math.floor(Math.random() * array.length)];
    return random;
}



