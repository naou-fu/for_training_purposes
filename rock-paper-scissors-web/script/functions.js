import { all } from "./objects.js";


//delays the text
export function PrintAndWait(id, text, timewait) {
    setTimeout(() => {
        document.getElementById(id).textContent = text;
    }, timewait);
}


export function CreateBlock(blocktype, blockid, blocktext) {

    const block = document.createElement(blocktype);

    block.id = blockid;
    block.textContent = blocktext;

    document.body.appendChild(block);
    return block;
}



//hides blocks
export function HideBlock(block1, block2, block3) {

        document.getElementById(block1).style.display = "none";
        console.log("Hiding block: " + block1);

        document.getElementById(block2).style.display = "none";
        console.log("Hiding block: " + block2);

        document.getElementById(block3).style.display = "none";
        console.log("Hiding block: " + block3);


}


//shows blocks
export function ShowBlock(block1, block2, block3, timewait) {
    setTimeout(() => {
        document.getElementById(block1).style.display = "block";
        console.log("Showing block: " + block1);

        document.getElementById(block2).style.display = "block";
        console.log("Showing block: " + block2);

        document.getElementById(block3).style.display = "block";
        console.log("Showing block: " + block3);

    }, timewait);
        

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



