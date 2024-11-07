function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function addBackgroundColor(backgroundColor) {
    const element = document.getElementById(backgroundColor);
    element.classList.add("bg-orange-400");
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400");
}

// function getARandomAlphabet() {
//     const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//     const alphabets = alphabetString.split("");
//     // console.log(alphabets);
//     // const radomAlphabet = Math.random() * alphabets.length;

//     // return alphabet[Math.floor(Math.random() * alphabet.length)];

//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);

//     const alphabet = alphabets[index];
//     // console.log(alphabet);
//     return alphabet;
// }

function getARandomAlphabet() {
    const alphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
    ];

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}

function getElementValueById(element) {
    const currentScore = document.getElementById(element).innerText;
    const score = parseInt(currentScore);
    return score;
}

function updateElementValueById(elementId, score) {
    const currentScore = document.getElementById(elementId);
    currentScore.innerText = score;
}
