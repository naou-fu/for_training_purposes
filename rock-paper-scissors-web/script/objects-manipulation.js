import {greetings} from "./objects.js";
import {Randomize} from "./functions.js";



function Wait(text1) {
    setTimeout(() => {
        document.getElementById("greeting").textContent = text1 + "Let's play!";
    }, 3000);

}


Wait(Randomize(greetings));





