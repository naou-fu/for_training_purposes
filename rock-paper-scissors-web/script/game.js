import {win} from "./functions.js";





export function Game() {
    
    let choice = ["rock", "paper", "scissors"];   
    let YourChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    let computerChoice = Math.floor(Math.random() * 3);
    
    console.log("Computer choice: " + choice[computerChoice]);
    console.log("Your choice: " + YourChoice);
    console.log("Game started!");

    if (YourChoice === choice[computerChoice]){
        console.log("It's a tie!");
    }
    else if (win[YourChoice] === choice[computerChoice]) {
        console.log("You win!");
    }
    else {
        console.log("Computer wins!");
    }

}

