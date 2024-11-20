function play() {
    for (let i = 0; i < 3; i++) {        
        let playerOne = prompt("Choose one: rock, paper or scissors?")
        let computerChoice = getComputerChoice()
    
        if (playerOne === computerChoice) alert("Computer chose " + computerChoice + ". It's a draw!")
        else if (
            (playerOne === 'rock' && computerChoice === 'scissors') || 
            (playerOne === 'scissors' && computerChoice === 'paper') ||
            (playerOne === 'paper' && computerChoice === 'rock')
        ) {
            alert("Computer chose " + computerChoice + ". Player 1 won!")
            break
        } 
        else alert("Computer chose " + computerChoice + ". Computer won!")
    }
}

function getComputerChoice() {
    let options = ['rock', 'paper', 'scissors']
    let rnd = Math.floor(Math.random() * options.length)
    console.log(rnd)
    console.log(options[rnd])
    return options[rnd]
}