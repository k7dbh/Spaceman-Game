/*-------------- Constants -------------*/
const words = ['cat', 'lion', 'dog', 'zebra', 'bird', 'hamster', 'goat', 'pig', 'horse', 'wolf', 'banana', 'mouse', 'banana', 'orange', 'table', 'board', 'chair', 'paper', 'card', 'pen', 'door', 'wire', 'computer', 'pencil', 'table', 'teacher', 'window', 'flower', 'water', 'panda', 'candy', 'bag', 'glass', 'hat', 'pizza', 'burger', 'juice', 'tower',];
const misTimes = 5; // maximum number of wrong guesses
const spacePics = ['🏃‍➡️_________________🪦', '_____🏃‍➡️____________🪦', '________🏃‍➡️_________🪦', '____________🏃‍➡️_____🪦', '_______________🏃‍➡️__🪦', '____________________🪦😵'];

/*---------- Variables ---------*/
let wordRdm = '';
let guessLetter = []
let guessWrong = 0;
let loseGame = false;

/*----- Cached Element References  -----*/
const spaceManEl = document.querySelector('.spaceman-art');
const wordEl = document.querySelector('.word');
const keyBtnEl = document.querySelectorAll('.key');
const msgEl = document.querySelector('.message');
const resetBtn = document.querySelector('.reset');

/*-------------- Functions -------------*/

// starting the game
startGame = () => {
    wordRdm = words[Math.floor(Math.random() * words.length)];
    guessLetter = [];
    guessWrong = 0;
    loseGame = false;
    msgEl.textContent = '';

    keyBtnEl.forEach(btn => btn.disabled = false);
    renderUI();
}

// handle guessing a letter
guessWord = (letter, btn) => {
    if (loseGame || guessLetter.includes(letter)) return;
    guessLetter.push(letter);

    // disable the button after guess
    btn.disabled = true;

    // check if letter in the word
    if (!wordRdm.includes(letter.toLowerCase())) guessWrong++;

    // update game state and UI
    winLose();
    renderUI();
}

// check for win or lose conditions
winLose = () => {
    if (wordRdm.split('').every(a => guessLetter.includes(a.toUpperCase()))) {
        loseGame = true;
        msgEl.textContent = 'You Win!!!';

        keyBtnEl.forEach(btn => btn.disabled = true);
    } else if (guessWrong >= misTimes) {
        loseGame = true;
        msgEl.textContent = `You Lose! Word: "${wordRdm.toUpperCase()}"
        Try again`;
        keyBtnEl.forEach(btn => btn.disabled = true);
    }
}
// Render UI functions
renderUI = () => {

    //render for spaceman movement
    renderSpaceMan = () => {
        spaceManEl.textContent = spacePics[guessWrong];
    }
    //render for guessing letters in the blanks
    renderWord = () => {
        wordEl.innerHTML = '';
        for (let a of wordRdm) {
            wordEl.innerHTML += guessLetter.includes(a.toUpperCase()) ? a.toUpperCase() + ' ' : '_ ';
        }
    }
    //render for appearing message and missing times
    renderMsg = () => {
        if (!loseGame) {
            msgEl.textContent = `Wrong guesses: ${guessWrong} / ${misTimes}`;
        }
    }
    renderSpaceMan();
    renderWord();
    renderMsg();
}
/*----------- Event Listeners ----------*/

// To click buttons
keyBtnEl.forEach(btn => {
    btn.addEventListener('click', function () {
        guessWord(btn.textContent, btn);
    });
});

// This is the reset button
resetBtn.addEventListener('click', startGame);

// This is physical keyboard
window.addEventListener('keydown', press => {
    if (loseGame) return;
    const key = press.key.toUpperCase();
    const btn = Array.from(keyBtnEl).find(bbtn => bbtn.textContent === key);
    if (btn && !btn.disabled) {
        guessWord(key, btn);
    }
});


// Initialize game
startGame();