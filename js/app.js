/*-------------- Constants -------------*/
const word = ['cat','lion','dog','zebra','bird','hamster','goat','pig','horse','wolf','banana','mouse','banana','orange','table','board','chair','paper','card','pen','door','wire','computer']
const misTimes = 6;//6 times maximum number of mistakes



/*---------- Variables (state) ---------*/

let loseGame = false;
let guessWrong = 0;
let guessLetter = [];


/*----- Cached Element References  -----*/
const spaceManEl = document.querySelector('.space-man');
const wordEl = document.querySelector('.word');
const keyBtnEl = document.querySelectorAll('.key');
const msgEl = document.querySelector('.message');
const resetBtn = document.querySelector('.reset');
console.log(wordEl)


/*-------------- Functions -------------*/





/*----------- Event Listeners ----------*/
