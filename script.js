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
    let playerPlay = prompt(`Type a number base on your selection!: 1: ${gamePlays[0]}, 2: ${gamePlays[1]}, 3: ${gamePlays[2]}`)
    playerPlay = Number(playerPlay)
    switch(playerPlay){
        case 1:{
            return gamePlays[0]
        }
        case 2:{
            return gamePlays[1]
        }
        default:{
            return gamePlays[2]
        }
    }
}
// create function to calculate who won from the input of the user and display
function playRound(computer, player){
   if(computer === 'rock' && player === 'paper'){
       return 'paper beats rock You WON!'
   }
   else if(computer === 'paper' && player === ' rock'){
       return 'paper beats rock You LOSE!'
   }
   if(computer === 'scissors' && player === 'rock'){
       return 'rock beats scissors You WON!'
   }else if(computer === 'rock' && player === 'scissors'){
       return 'rock beats scissors You LOSE!'
   }
   
   if(computer === 'scissors' && player === 'paper'){
       return 'scissors beat paper You LOSE!'
   }
   
   else if(computer === 'paper' && player === 'scissors'){
       return 'scissors beat paper You WON!'
   }

   else{
       return 'Draw'
   }

}
// display info in the console about who won

console.log(playRound(computerPlay(), playerSelection()))