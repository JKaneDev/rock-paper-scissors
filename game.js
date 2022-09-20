const weapons = ['rock', 'paper', 'scissors'];

let playerSelection;
let computerSelection;
let result;
let winner;
let playerScore = 0;
let computerScore = 0;


console.log(game(playerSelection, computerSelection));

function getComputerChoice() {
    // Get random number to index into array 
    let randomIndex = Math.floor(Math.random() * weapons.length);
    // Assign weapon at that position to variable 
    const computerSelection = weapons[randomIndex]
    // Return the weapon
    return computerSelection;

}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose Your Weapon: ").toLowerCase();
    computerSelection = getComputerChoice();
    
    switch (true) {
        case (playerSelection == 'rock' && computerSelection == 'paper'):
            result = 'You lose! Paper Beats Rock'
            break;
        case (playerSelection == 'rock' && computerSelection == 'scissors'):
            result = 'You Win! Rock Beats Scissors';           
            break;
        case (playerSelection == 'rock' && computerSelection == 'rock'):
            result = 'TIE!'
            break;
        case (playerSelection == 'paper' && computerSelection == 'paper'):
            result = 'TIE!'
            break;
        case (playerSelection == 'paper' && computerSelection == 'scissors'):
            result = 'You Lose! Scissors Beats Paper'
            break;
        case (playerSelection == 'paper' && computerSelection == 'rock'):
            result = 'You Win! Paper Beats Rock'
            break;
        case (playerSelection == 'scissors' && computerSelection == 'paper'):
            result = 'You Win! Scissors Beats Paper'
            break;
        case (playerSelection == 'scissors' && computerSelection == 'scissors'):
            result = 'TIE!'
            break;
        case (playerSelection == 'scissors' && computerSelection == 'rock'):
            result = 'You Lose! Rock Beats Paper'
            break;
    }
    return result;
  }

  
//   function game(playerSelection, computerSelection) {

//     const validate_winner = 'You Win!'
//     const validate_loser = 'You Lose!'
//     const validate_tie = "TIE!"

//     for (let i = 0; i < 5; i++) {
//         result = playRound(playerSelection, computerSelection);
        
//         if (result.includes(validate_winner)) {
//             playerScore++;
//         }
        
//         else if (result.includes(validate_loser)) {
//             computerScore++;
//         }

//         else if (result.includes(validate_tie)) {
//             playerScore++;
//             computerScore++;
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("You are the winner!");
//     }

//     else if (computerScore > playerScore) {
//         console.log("Computer Wins! You Suck!");
//     }

//     else {
//         console.log('TIE!');
//     }

//     console.log(playerScore, computerScore);
//     }

