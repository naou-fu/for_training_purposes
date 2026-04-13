import { initializeEventListeners } from "./functions.js";
import { initializeGame } from "./game.js";

// Initialize everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    initializeEventListeners();
    initializeGame();
});

