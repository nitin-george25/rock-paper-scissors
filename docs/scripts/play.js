const player = {
    name: 'Player',
    hand: ''
};

const comp = {
    name: 'Computer',
    hand: ''
};

function play() {
    player.hand = getHand(Math.round(Math.random() * 2));
    comp.hand = getHand(Math.round(Math.random() * 2));

    console.log(`${player.hand} vs ${comp.hand}`);
    console.log(declareWinner());
}

function getHand(number) {
    let hands = ['rock', 'paper', 'scissors'];

    return hands[number];
}

function declareWinner() {
    let winner = null;

    if (player.hand === comp.hand) {
        return 'Draw';
    }

    switch (player.hand) {
        case 'rock':
            if (comp.hand === 'scissors') {
                winner = player.name;
            } else {
                winner = comp.name;
            }

            break;

        case 'paper':
            if (comp.hand === 'rock') {
                winner = player.name;
            } else {
                winner = comp.name;
            }

            break;

        case 'scissors':
            if (comp.hand === 'paper') {
                winner = player.name;
            } else {
                winner = comp.name;
            }

            break;
    }

    return winner;
}