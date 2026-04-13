import { greetings, win, challenges, BadGame, GoodGame, GoodBye } from "./objects.js";

/**
 * Delays text updates for a greeting sequence.
 * @param {string} text1 - First part of greeting.
 * @param {string} text2 - Second text.
 * @param {string} text3 - Third text.
 * @param {string} text4 - Fourth text.
 */
export function waitForGreeting(text1, text2, text3, text4) {
    setTimeout(() => {
        const greetingEl = document.getElementById("greeting");
        if (greetingEl) greetingEl.textContent = text1 + " player!";
    }, 3000);
    setTimeout(() => {
        const greetingEl = document.getElementById("greeting");
        if (greetingEl) greetingEl.textContent = text2;
    }, 5000);
    setTimeout(() => {
        const greetingEl = document.getElementById("greeting");
        if (greetingEl) greetingEl.textContent = text3;
    }, 7000);
    setTimeout(() => {
        const greetingEl = document.getElementById("greeting");
        if (greetingEl) greetingEl.textContent = text4;
    }, 9000);
}

/**
 * Hides multiple DOM elements.
 * @param {...string} blockIds - IDs of elements to hide.
 */
export function hideBlocks(...blockIds) {
    blockIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = "none";
            console.log(`Hiding block: ${id}`);
        }
    });
}

/**
 * Shows multiple DOM elements.
 * @param {...string} blockIds - IDs of elements to show.
 */
export function showBlocks(...blockIds) {
    blockIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = "block";
            console.log(`Showing block: ${id}`);
        }
    });
}

/**
 * Returns a random element from an array.
 * @param {Array} array - The array to randomize from.
 * @returns {*} A random element.
 */
export function randomize(array) {
    if (!Array.isArray(array) || array.length === 0) return null;
    const random = array[Math.floor(Math.random() * array.length)];
    console.log(`Randomized: ${random}`);
    return random;
}

/**
 * Validates a username.
 * @param {string} username - The username to check.
 * @returns {boolean} True if valid.
 */
export function checkUsername(username) {
    if (!username || username.trim() === "") {
        alert("Username cannot be empty. Please enter a valid username.");
        return false;
    }
    if (username.toLowerCase() === "username") {
        alert("Username cannot be 'username'. Please choose a different username.");
        return false;
    }
    if (username.toLowerCase() === "youtube") {
        window.open("https://www.youtube.com/", "_blank");
        return false; // Assuming invalid for game
    }
    return true;
}

/**
 * Gets the player's choice from button clicks.
 * @returns {string|null} The player's choice.
 */
export function getPlayerChoice() {
    return new Promise((resolve) => {
        const buttons = document.querySelectorAll(".choice");
        const handleClick = (event) => {
            const choice = event.target.value;
            console.log(`Player chose: ${choice}`);
            buttons.forEach(btn => btn.removeEventListener("click", handleClick));
            resolve(choice);
        };
        buttons.forEach(button => button.addEventListener("click", handleClick));
    });
}

/**
 * Sets up the username input and validation.
 */
export function setupUsername() {
    const usernameInput = document.getElementById("username");
    const submitBtn = document.getElementById("btn-submit");

    if (!usernameInput || !submitBtn) return;

    submitBtn.addEventListener("click", () => {
        const nameValue = usernameInput.value.trim();
        console.log(`Username entered: ${nameValue}`);

        if (checkUsername(nameValue)) {
            const nameEl = document.getElementById("name");
            if (nameEl) nameEl.textContent = nameValue;
            // Hide username input after valid submission
            hideBlocks("label-username", "username", "btn-submit");
        }
    });
}

/**
 * Initializes event listeners for game elements.
 */
export function initializeEventListeners() {
    setupUsername();
}
