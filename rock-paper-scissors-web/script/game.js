

import { randomize, waitForGreeting, hideBlocks, showBlocks, getPlayerChoice } from "./functions.js";
import { greetings, win, challenges, BadGame, GoodGame, GoodBye } from "./objects.js";

/**
 * Represents the game state.
 */
class GameState {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.rounds = 0;
    }

    reset() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.rounds = 0;
        this.updateScoreDisplay();
    }

    updateScoreDisplay() {
        const myTriesEl = document.getElementById("my-tries");
        const urTriesEl = document.getElementById("ur-tries");
        if (myTriesEl) myTriesEl.textContent = `My tries: ${this.computerScore}`;
        if (urTriesEl) urTriesEl.textContent = `Your tries: ${this.playerScore}`;
    }

    incrementPlayer() {
        this.playerScore++;
        this.updateScoreDisplay();
    }

    incrementComputer() {
        this.computerScore++;
        this.updateScoreDisplay();
    }
}

const gameState = new GameState();

/**
 * Determines the winner of a round.
 * @param {string} playerChoice - Player's choice.
 * @param {string} computerChoice - Computer's choice.
 * @returns {string} 'player', 'computer', or 'tie'.
 */
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if (win[playerChoice] === computerChoice) return 'player';
    return 'computer';
}

/**
 * Displays the result of a round.
 * @param {string} result - The result message.
 */
function displayResult(result) {
    const resultEl = document.getElementById("result");
    if (resultEl) resultEl.textContent = result;
}

/**
 * Plays a single round.
 */
async function playRound() {
    const playerChoice = await getPlayerChoice();
    const computerChoice = randomize(Object.keys(win));

    console.log(`Computer chose: ${computerChoice}`);

    const winner = determineWinner(playerChoice, computerChoice);

    let resultMessage = "";
    if (winner === 'player') {
        gameState.incrementPlayer();
        resultMessage = randomize(GoodGame);
    } else if (winner === 'computer') {
        gameState.incrementComputer();
        resultMessage = randomize(BadGame);
    } else {
        resultMessage = "It's a tie!";
    }

    displayResult(`${resultMessage} (You: ${playerChoice}, Computer: ${computerChoice})`);

    gameState.rounds++;
    if (gameState.rounds >= 5) {
        endGame();
    }
}

/**
 * Ends the game and shows final score.
 */
function endGame() {
    const finalScoreEl = document.getElementById("final-score");
    let message = "";
    if (gameState.playerScore > gameState.computerScore) {
        message = randomize(GoodGame);
    } else if (gameState.computerScore > gameState.playerScore) {
        message = randomize(BadGame);
    } else {
        message = "It's a tie game!";
    }

    if (finalScoreEl) finalScoreEl.textContent = `Final Score - You: ${gameState.playerScore}, Computer: ${gameState.computerScore}. ${message}`;

    // Show replay button
    showBlocks("replay");
}

/**
 * Starts the game.
 */
export function startGame() {
    console.log("Starting game...");
    gameState.reset();

    // Hide initial elements, show game elements
    hideBlocks("greeting", "name");
    showBlocks("score-container", "btn-container", "result");

    // Start rounds
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

/**
 * Initializes the game with greeting sequence.
 */
export function initializeGame() {
    const greeting = randomize(greetings);
    const challenge = randomize(challenges);

    waitForGreeting(greeting, challenge, "Let's play!", "Choose your move!");

    setTimeout(() => {
        startGame();
    }, 10000); // After greeting sequence
}
