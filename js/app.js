/*-------------- Constants -------------*/
const words = ['cat','lion','dog','zebra','bird','hamster','goat','pig','horse','wolf','banana','mouse','banana','orange','table','board','chair','paper','card','pen','door','wire','computer','pencil','table','teacher','window','flower','water','panda','candy','bag','glass','hat','pizza','burger','juice','tower',];
const misTimes = 6; // maximum number of wrong guesses
const spaceMnPc = ['🏃‍♂️‍➡️____________ ','__🏃‍♂️‍➡️__________','____🏃‍♂️‍➡️________','_______🏃‍♂️‍➡️_____','__________🏃‍♂️‍➡️__','___________🏃‍♂️‍➡️_','___________🪦😵'];

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
function startingGame() {
    wordRdm = words[Math.floor(Math.random() * words.length)];
    guessLetter = [];
    guessWrong = 0;
    loseGame = false;
    msgEl.textContent = '';
    
    
    renderUI();
}

// handle guessing a letter
function guessWord(letter, btn) {
    if (loseGame || guessLetter.includes(letter)) return;
    guessLetter.push(letter);
    // disable the button after guess
    

    // check if letter in the word
    if (!wordRdm.includes(letter.toLowerCase())) guessWrong++;

    // update game state and UI
    winLose();
    renderUI();
}

// check for win or lose
function winLose() {
      if (wordRdm.split('').every(a => guessLetter.includes(a.toUpperCase()))) {
        loseGame = true;
        msgEl.textContent = 'You Win!';
        keyBtnEl.forEach(btn => btn.disabled = true);
      } else if (guessWrong >= misTimes) {
        loseGame = true;
        msgEl.textContent = `You Lose! Word: "${wordRdm.toUpperCase()}"`;
        keyBtnEl.forEach(btn => btn.disabled = true);
      }
}
// Render UI functions
function renderSpaceMan() {
    spaceManEl.textContent = spaceMnPc[guessWrong];
}


function renderWord() {
      wordEl.innerHTML = '';
      for (let a of wordRdm) {
        wordEl.innerHTML += guessLetter.includes(a.toUpperCase()) ? a.toUpperCase() + ' ' : '_ ';
      }
    }

function renderMsg() {
    if (!loseGame) {
        msgEl.textContent = `Wrong guesses: ${guessWrong} / ${misTimes}`;
    }
}


function renderUI() {
    renderSpaceMan();
    renderWord();
}

/*----------- Event Listeners ----------*/
keyBtnEl.forEach(btn => {
    btn.addEventListener('click', function() {
        guessWord(btn.textContent, btn);
    });
});

 resetBtn.addEventListener('click', startingGame);
// Initialize game
startingGame();