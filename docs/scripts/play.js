import { showCountdown } from "./animations.js";
import { Game } from "./game.js";

const game = new Game();

export function play(e) {
    const choice = e.target.getAttribute("data-key");

    let playerHand = getHand(choice);
    let compHand = getHand(Math.round(Math.random() * 2));

    game.setHands(playerHand, compHand);
    game.play();
    displayHands();
    displayScore();

    let winner = game.hasWinner();

    if (winner) {
        displayWinner(winner);
        displayGameover();
    }
}

export function restart() {
    game.reset();
    displayScore();
    showCountdown();
    removeGameover();
}

function displayHands() {
    const hands = game.getHands();
    const users = ['playerHand', 'computerHand'];

    for (let user of users) {
        let screen = document.getElementById(user);
        let icon = `<i class="far fa-hand-${hands[user]}"></i>`;
        screen.innerHTML = icon;
    }
}

function displayScore() {
    let playerBoard = document.getElementById('player');
    let compBoard = document.getElementById('comp');

    playerBoard.textContent = game.player.getScore();
    compBoard.textContent = game.computer.getScore();
}

function displayGameover() {
    const gameover = document.getElementById("gameover");

    gameover.classList.remove("hidden");
}

function removeGameover() {
    const gameover = document.getElementById("gameover");

    gameover.classList.add("hidden");
}

function displayWinner(winner) {
    const winnerArea = document.getElementById("winner");

    winnerArea.textContent = `${winner} wins!`;
}

function getHand(number) {
    let hands = ['rock', 'paper', 'scissors'];

    return hands[number];
}