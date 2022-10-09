//AUDIO FILES
const tap = new Audio("tap.wav");
const winner = new Audio("winner.mp3");
const draw = new Audio("dra.wav");
const wrongTap = new Audio("wrong.wav");

// selceting important element
const turnSelector = document.querySelector('.turn')
const gameBoxClick = document.querySelectorAll('.gameBox');
const reset = document.querySelector('#reset');



//TURN SELECETOR
let turn = 'X';
const changeTurn = () => turn === 'X'?'0' :'X';

//winning pattern

const winningPtrn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],
    
    [0,4,8],
    [2,4,6]
]
let counter = 1;

const checkWinner = () => {
    for(let ptrn of winningPtrn) {
        if ((gameBoxClick[ptrn[0]].innerText === gameBoxClick[ptrn[1]].innerText) && (gameBoxClick[ptrn[2]].innerText === gameBoxClick[ptrn[1]].innerText) && (gameBoxClick[ptrn[0]].innerText !== "")) {
         turnSelector.innerText = `THE WINNER IS: ${gameBoxClick[ptrn[0]].innerText}`;
         winner.play();
          hider();
       } 
    }
   }

// hides the game board and shows winner gif
function hider() {
    for(let bo of gameBoxClick){
        bo.classList.add("hider");
        document.querySelector('.leftContainer img').classList.add("ch-w");
    }
}
//game code
for(let box of gameBoxClick){
    box.addEventListener('click', () =>{
        if(box.innerText === ""){
            box.innerText = turn;
            turn = changeTurn();
            tap.play();
            turnSelector.innerText = `It's turn for ${turn}`;
            checkWinner();
        }
        else {
            wrongTap.play();
        }
    });
}   

// reset game

reset.addEventListener('click', () =>{
    for(let bo of gameBoxClick){
        bo.classList.remove("hider");
        // bo.classList.remove("show");
        bo.innerText= '';
        document.querySelector('.leftContainer img').classList.remove("ch-w")
        turnSelector.innerText = `It's turn for ${turn}`;
        // img.classList.add("show");
    }
})