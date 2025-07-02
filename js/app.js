/*-------------- Constants -------------*/
const words = ['cat','lion','dog','zebra','bird','hamster','goat','pig','horse','wolf','banana','mouse','banana','orange','table','board','chair','paper','card','pen','door','wire','computer']
const misTimes = 6;//6 times maximum number of mistakes



/*---------- Variables (state) ---------*/

let loseGame = false;//game over
let guessWrong = 0;//gessing wrong
let guessLetter = [];//guess letter
let wordRdm = '';//secret word


/*----- Cached Element References  -----*/
const spaceManEl = document.querySelector('.space-man');
const wordEl = document.querySelector('.word');
const keyBtnEl = document.querySelectorAll('.key');
const msgEl = document.querySelector('.message');
const resetBtn = document.querySelector('.reset');
console.log(wordEl)


/*-------------- Functions -------------*/
function starting(){
    wordRdm = words[Math.floor(Math.random() * words.length)];
}


function gussWord(){
    if(loseGame || guessLetter.includes(letter)) return;
    guessLetter.push(letter);
    if(!wordRdm.includes(letter)) guessWrong++;
}








/*----------- Event Listeners ----------*/

resetBtn.addEventListener('click', starting);