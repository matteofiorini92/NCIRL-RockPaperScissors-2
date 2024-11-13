let button = document.getElementById('play')

function handleButton() {
    let playerOne = document.getElementById('player-one').value
    let playerTwo = document.getElementById('player-two').value
    
    if (playerOne === playerTwo) alert("It's a draw!")
    else if (
        (playerOne === 'rock' && playerTwo === 'scissors') || 
        (playerOne === 'scissors' && playerTwo === 'paper') ||
        (playerOne === 'paper' && playerTwo === 'rock')
    ) alert("Player 1 won!")
    else alert("Player 2 won!")
}

button.addEventListener('click', handleButton)