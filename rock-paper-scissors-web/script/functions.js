import {all} from "./objects.js";

//delays the text

export function Wait(text1, text2, text3, text4) {
    setTimeout(() => {
        document.getElementById("greeting").textContent = text1 + "player!";
    }, 3000);
    setTimeout(() => {
        document.getElementById("greeting").textContent = text2;
    }, 5000);
    setTimeout(() => {
        document.getElementById("greeting").textContent = text3 ;
    }, 7000);
    setTimeout(() => {
        document.getElementById("greeting").textContent = text4 ;
    }, 9000);
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
export function ShowBlock(block1, block2, block3) {

        document.getElementById(block1).style.display = "block";
        console.log("Showing block: " + block1);
        document.getElementById(block2).style.display = "block";
        console.log("Showing block: " + block2);
        document.getElementById(block3).style.display = "block";
        console.log("Showing block: " + block3);
}

//randomize the content of an array and return it
export function Randomize(array) {
    let random = array[Math.floor(Math.random() * array.length)];

    return random;
}

//check if a username is in the correct format

export function CheckUsername(username) {
    switch (username) {
        case null:
            alert("Username cannot be null. Please enter a valid username.");
            return false;
        case "username":
            alert("Username cannot be 'username'. Please choose a different username.");
            return false;
        case "youtube":
            window.open("https://www.youtube.com/", "_blank");
        default:
            return true;
        
    }
}

//gets player choice and logs it to the console

export function GetPlayButton(player) {
    const buttons = document.querySelectorAll(".choice");

    buttons.forEach(button =>  {
        console.log(button)
        button.addEventListener("click", (det) => {
        console.log(det)

        player = det.target.value;
        
        return player;
    });
});
}


export function setupUsername() {

    const usernameInput = document.getElementById("username");
    const submitBtn = document.getElementById("btn-submit");

    submitBtn.onclick = function() {
        let nameValue = usernameInput.value;
        
        console.log("Username entered: " + nameValue);
        
        CheckUsername(nameValue);
    };
    return usernameInput;
}
