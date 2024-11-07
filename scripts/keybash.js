// function playNow() {
//     const homeScreen = document.getElementById("home");
//     homeScreen.classList.add("hidden");

//     const playGround = document.getElementById("play-ground");
//     playGround.classList.remove("hidden");
// }

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log("🚀 ~ continueGame ~ alphabet:", alphabet)

    const showingAlphabet = document.getElementById("showing-alphabet");
    showingAlphabet.innerText = alphabet;

    addBackgroundColor(alphabet);
}

function getKeyboardPressEvent(event) {
    const playedPressed = event.key;
    if (playedPressed === "Escape"){
        gameOverScreen();
    }

    const key = event.key.toLowerCase();
    const randomAlphabet = document.getElementById("showing-alphabet");
    const correctAlphabet = randomAlphabet.innerText.toLowerCase();
    // console.log(key,correctAlphabet)

    if (key === correctAlphabet) {
        const currentScore = getElementValueById("score");
        const newScore = currentScore + 1;
        updateElementValueById("score", newScore);

        removeBackgroundColor(correctAlphabet);
        continueGame();
    } else {
        const currentScore = getElementValueById("current-life") - 1;

        updateElementValueById("current-life", currentScore);

        if (currentScore === 0) {
            gameOverScreen();

            // const playGround = document.getElementById("play-ground");
            // playGround.classList.add("hidden");
            // const gameOverScreen = document.getElementById("play-again");
            // gameOverScreen.classList.remove("hidden");
            // removeBackgroundColor(correctAlphabet);
        }

        // console.log("Wrong!");
        // // Show correct answer and restart game
        // const currentLife = document.getElementById("current-life").innerText;
        // const life = parseInt(currentLife);
        // const newLife = currentLife - 1;
        // document.getElementById("current-life").innerText = newLife;
    }
}

document.addEventListener("keyup", getKeyboardPressEvent);

// function playAgain() {
//     showElementById("play-ground");

//     hideElementById("play-again");

//     continueGame();

//     const currentScore = getElementValueById("score");
//     updateElementValueById("score", 0);
//     const currentLife = document.getElementById("current-life").innerText;
//     updateElementValueById("current-life", 3);
// }

function play() {
    hideElementById("home");
    hideElementById("play-again");
    showElementById("play-ground");

    updateElementValueById("current-life", 3);
    updateElementValueById("score", 0);
    continueGame();
}

function gameOverScreen() {
    hideElementById("play-ground");
    showElementById("play-again");

    const lastScore = document.getElementById("score").innerText;
    // console.log("🚀 ~ gameOverScreen ~ lastScore:", lastScore);
    document.getElementById("last-score").innerText = lastScore;
    const currentAlphabet = getElementTextById("showing-alphabet");
    removeBackgroundColor(currentAlphabet);
}
