import { Player } from "./player.js";

export class Game {

    constructor(player = 'Player', computer = 'Computer') {
        this.player = new Player(player);
        this.computer = new Player(computer);
    }

    setHands(playerHand, compHand) {
        this.player.setHand(playerHand);
        this.computer.setHand(compHand);
    }

    getHands() {
        return {
            playerHand: this.player.getHand(),
            computerHand: this.computer.getHand()
        };
    }

    play() {
        let winner = this.declareWinner();

        if (winner === this.player.getName()) {
            this.player.increaseScore();
        } else if (winner === this.computer.getName()) {
            this.computer.increaseScore();
        }
    }

    reset() {
        this.player = new Player('Player');
        this.computer = new Player('Computer');
    }

    hasWinner() {
        let playerScore = this.player.getScore();
        let compScore = this.computer.getScore();

        if (playerScore === 5) {
            return this.player.getName();
        } else if (compScore === 5) {
            return this.computer.getName();
        }
    }

    declareWinner() {
        const playerHand = this.player.getHand();
        const compHand = this.computer.getHand();

        const playerOne = this.player.getName();
        const playerTwo = this.computer.getName();

        if (playerHand === compHand) {
            return 'Draw';
        }

        switch (playerHand) {
            case 'rock':
                if (compHand === 'scissors') {
                    return playerOne;
                } else {
                    return playerTwo;
                }

            case 'paper':
                if (compHand === 'rock') {
                    return playerOne;
                } else {
                    return playerTwo;
                }

                break;

            case 'scissors':
                if (compHand === 'paper') {
                    return playerOne;
                } else {
                    return playerTwo;
                }
        }
    }
}