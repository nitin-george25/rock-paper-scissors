import { play, restart } from "./play.js";
import { animateStart } from "./animations.js";

const options = [...document.getElementsByClassName("option")];

options.forEach(option => {
    option.addEventListener('click', (e) => {
        animateStart().then(() => {
            play(e);
        });
    });
});

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    restart();
});