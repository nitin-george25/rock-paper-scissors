export class Player {
    constructor(name) {
        this.name = name;
        this.hand = '';
        this.score = 0;
    }

    setHand(hand) {
        this.hand = hand;
    }

    getHand(hand) {
        return this.hand;
    }

    increaseScore() {
        this.score += 1;
    }

    getScore() {
        return this.score;
    }

    getName() {
        return this.name;
    }
}