export function animateStart() {
    return new Promise(resolve => {
        showCountdown();

        let index = 0;
        let timer = setInterval(animateCountdown, 500);

        function animateCountdown() {
            const area = document.getElementById("start");
            const words = ["Rock", "Paper", "Scissors!", ""];

            area.innerHTML = `<p> ${words[index]} </p>`;
            index++;

            if (index === words.length) {
                clearTimer(timer);
                hideCountdown();
                resolve();
            }
        }
    });
}

function clearTimer(timer) {
    clearInterval(timer);
    timer = null;
}

function hideCountdown() {
    const countdownArea = document.getElementById("start");
    const gameboard = document.getElementById("game");

    countdownArea.classList.add("hidden");
    gameboard.classList.remove("hidden");
}

export function showCountdown() {
    const countdownArea = document.getElementById("start");
    const gameboard = document.getElementById("game");

    countdownArea.textContent = "";
    countdownArea.classList.remove("hidden");
    gameboard.classList.add("hidden");
}