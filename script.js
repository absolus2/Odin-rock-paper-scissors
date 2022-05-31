//Rock papper scissors
// create array to store the game variables (rock, papper, scissors)
const gamePlays = ['rock', 'paper', 'scissors'];
// Create function for computer to return random value between rock papper scissor
function computerPlay(){
    let randomPlay = gamePlays[Math.floor(Math.random() * gamePlays.length)]
    return randomPlay
}
// create function to calculate who won from the input of the user and the computer
function playRound(computer, player){
   if(computer === 'rock'){
       if(player === 'paper'){
           return 'paper beats rock You WON!'
       }else if(player === 'rock'){
           return 'rock against rock it`s a Draw'
       }else if(player === 'scissors'){
           return 'rock beat scissors You LOSE!'
       }
   }

   if(computer === 'paper'){
       if(player === 'rock'){
           return 'paper beats rock You LOSE!'
       }else if(player === 'paper'){
           return 'Draw'
       }else if(player === 'scissors'){
           return 'scissors beat paper You WON!'
       }
   }

   if(computer === 'scissors'){
       if(player === 'rock'){
           return 'rock beats scissors You WON!'
       }else if(player === 'paper'){
           return 'scissors beats rock You LOSE!'
       }else if(player === 'scissors'){
           return 'Draw'
       }
   }
}

// add event listener to button to get the choice of the player

const btns = document.querySelectorAll('button');

// result div to display the result of the match

const result = document.querySelector('.results');
const score = document.querySelector('.score');

let wins = 0;
let loses = 0;
let draw = 0;

btns.forEach(btn => btn.addEventListener('click',function(e){
    let playerChoice = e.target.classList.value.toLowerCase();
    let who = playRound(computerPlay(), playerChoice);
    result.textContent = who;
    
    scores(who)
    end()
}))

function scores(results){
    if(results.includes('WON!')){
        wins = wins +1;
        document.querySelector('.wins').textContent = wins
    }
    else if(results.includes('LOSE!')){
        loses ++
        document.querySelector('.loses').textContent = loses
    }
    else{
        draw ++
        document.querySelector('.draws').textContent = draw
    }
}

function end(){
    if(wins >= 5 && loses <= 4){
        document.querySelector('.winner').textContent = "You WON!!! Congratz!";
        defaultScore()
    }
    if( loses >= 5 && wins <= 4){
        document.querySelector('.winner').textContent = 'You LOSE!! Try again!';
        defaultScore()
    }
}

function defaultScore(){
    setTimeout(function(){
        document.querySelector('.winner').textContent = '';

        // reset the variables to 0
        wins = 0;
        loses = 0;
        draw = 0;

        document.querySelector('.draws').textContent = draw;
        document.querySelector('.loses').textContent = loses;
        document.querySelector('.wins').textContent = wins;
    }, 3000)
}