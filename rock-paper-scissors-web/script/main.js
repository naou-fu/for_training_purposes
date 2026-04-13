import {Game} from "./game.js";
import {setupUsername, Wait} from "./functions.js";

setupUsername();

setTimeout(() => {
    Game();
}, 4000);

