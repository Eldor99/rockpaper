console.log('elasfasl');
let choice = [ 'rock', 'paper', 'scissors'];

// Computer Play
function computerPlay(){
    return choice[Math.floor(Math.random() * 3)];
}


function playRound(playerSelection, computerSelection) {
    let lowerCase = playerSelection.toLocaleLowerCase();
    let playerScore;
    let computerScore;
    let message;
    switch(lowerCase) {
        case 'rock':
            if(computerSelection === 'rock'){
                message = 'draw';
            }else if(computerSelection === 'paper'){
                computerScore++;
                message = 'you lose';
            }else {
                playerScore++;
                message = 'win';
            }
        case 'paper':
          if(computerSelection === 'rock'){
            playerScore++;
              message = 'you won';
          }else if(computerSelection === 'paper'){
              message = 'draw';
          }else{
              computerScore++;
              message = 'you lose';
          }
        case 'scissors':
            if(computerSelection === 'paper'){
                playerScore++;
                message = 'you won';
            }else if(computerSelection === 'scissors'){
                message = 'draw';
            }else{
                computerScore++;
                message = 'you lose';
            }
            return message;
        default:
            message = 'somethin wrong';
      }
    }



    
    
    const playerSelection = "Rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    
    function game(){
        for(let i = 0; i < 5; i++){
            playRound(playerSelection, computerSelection);
            console.log('as');
        }
    }
    game();