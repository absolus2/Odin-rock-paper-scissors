//Rock papper scissors
// create array to store the game variables (rock, papper, scissors)
const gamePlays = ['rock', 'paper', 'scissors'];
// Create function for computer to return random value between rock papper scissor
function computerPlay(){
    let randomPlay = gamePlays[Math.floor(Math.random() * gamePlays.length)]
    return randomPlay
}
// Create function to get input from user Between rock papper scissor and return the input
function playerSelection(){
    let playerPlay = prompt(`Type a number base on your selection!: 1: 
    ${gamePlays[0]}, 2: ${gamePlays[1]}, 3: ${gamePlays[2]}`)
    playerPlay = Number(playerPlay)
    switch(playerPlay){
        case 1:{
            return gamePlays[0]
        }
        case 2:{
            return gamePlays[1]
        }
        case 3:{
            return gamePlays[2]
        }
    }
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
       }else if(player === 'rock'){
           return 'rock beats scissors You LOSE!'
       }else if(player === 'scissors'){
           return 'Draw'
       }
   }


}
// display info in the console about who won
function game(){
    let win = 0;
    let lose = 0;
    let draw = 0;
    for(let i = 0; i < 5; i ++){
        let round = playRound(computerPlay(), playerSelection())
        console.log(round)
        if(round.includes('You WON!')){
            win = win + 1;
        }
        else if(round.includes('You LOSE!')){
            lose = lose + 1;
        }
        else if (round.includes('Draw')){
            draw = draw + 1;
        }
    }
    if(draw > win && draw > lose || win === lose){
        console.log(`DRAW  draws: ${draw}`)
    }
    else if(win > lose){
        console.log(`You WON! Victories: ${win}`)
    }
    else if(lose > win){
        console.log(`You LOSE! Losses: ${lose}`)
    }
 
}


game()