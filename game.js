const weapons = ['rock', 'paper', 'scissors'];

let playerSelection;
let computerSelection;
let result;
let winner;
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock').addEventListener('click', playRound);
const paper = document.getElementById('paper').addEventListener('click', playRound);
const scissors = document.getElementById('scissors').addEventListener('click', playRound);
const refresh = document.querySelector('.refresh').addEventListener('click', playAgain);

const resultDiv = document.querySelector('.result');
let resultMessage = document.createElement('div');

let liveHumanScore = document.getElementById('updateHumanScore');
let liveComputerScore = document.getElementById('updateComputerScore');

function getComputerChoice() {
    // Get random number to index into array 
    let randomIndex = Math.floor(Math.random() * weapons.length);
    // Assign weapon at that position to variable 
    const computerSelection = weapons[randomIndex]
    // Return the weapon
    return computerSelection;

}

function playRound(playerSelection, computerSelection) {
    clearResult();
    playerSelection = this.id;
    console.log(playerScore, computerScore, 'id');
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
    updateScore(result);
    updateResult(result);
    console.log(playerScore, computerScore, 'US');
    gameEnd(playerScore, computerScore);
    return result;
  }

  
function gameEnd(playerScore, computerScore, result) {
    if (playerScore == 5 || computerScore == 5) {
        clearResult();
        
        document.getElementById('rock').removeEventListener('click', playRound);
        document.getElementById('paper').removeEventListener('click', playRound);
        document.getElementById('scissors').removeEventListener('click', playRound);

        endGameMessage(playerScore, computerScore);
    }
}

function updateResult(result) {
    resultMessage.classList.add('resultMessage');
    resultMessage.textContent = result;

    resultDiv.appendChild(resultMessage);
    resultDiv.style.display = 'flex';
    resultDiv.style.flexDirection = 'column';
    resultDiv.style.justifyContent = 'center';
    resultDiv.style.alignItems = 'center';
    resultMessage.style.fontWeight = 'bold';


}

function endGameMessage(playerScore, computerScore) {
    clearResult();
    if (playerScore > computerScore) {
        resultMessage.textContent = 'You Win! Refresh To Play Again';
    }
    else if (computerScore > playerScore) {
        resultMessage.textContent = 'You Lose! Refresh To Play Again';
    }
    else {
        resultMessage.textContent = 'TIE GAME! Refresh To Play Again';
    }
}

function clearResult() {
    resultMessage.textContent = '';
}

function updateScore(result) {
        if (result.includes('You Win!')) {
            ++playerScore;
        }
        else if (result.includes('You Lose!')) {
            ++computerScore;
        }
        else {
            ++playerScore;
            ++computerScore;
        }

    liveHumanScore.textContent = `${playerScore}`;
    liveComputerScore.textContent = `${computerScore}`;
}

function playAgain() {
    window.location.reload();
}