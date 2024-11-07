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

function play() {
    hideElementById("home");
    showElementById("play-ground");
    continueGame();
}

function getKeyboardPressEvent(event) {
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

        // console.log("Wrong!");
        // // Show correct answer and restart game
        // const currentLife = document.getElementById("current-life").innerText;
        // const life = parseInt(currentLife);
        // const newLife = currentLife - 1;
        // document.getElementById("current-life").innerText = newLife;
    }
}

document.addEventListener("keyup", getKeyboardPressEvent);
