let winners = [];
const choices = ["rock", "paper", "scissors"];
let ties = 0;

function restartGame(){
    winners = [];
    document.querySelector(".playerScore").textContent = "Score: 0";
    document.querySelector(".computerScore").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".playerChoice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}

function startGame(){
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => 
        img.addEventListener("click", () => {
            if (img.id){
                playRound(img.id);
            }
        })
    );
}

function playRound(playerChoice){
let wins = checkWins();

if(wins>5){
    return
}
    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice)
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
        if(wins == 5){
            displayEnd()
        }
}

function displayEnd(){
    let playerWins = winners.filter((item) => item == "Player").length;
    
    if(playerWins == 5){
        document.querySelector(".winner").textContent = `You Won, Congrats!`
    }
    else{
        document.querySelector(".winner").textContent = `Computer Wins`
    }

    document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner){
    document.querySelector('.playerChoice').textContent = `You chose: ${playerChoice/*.charAt(0).ToUpperCase() + playerChoice.slice(1)*/}`
    document.querySelector('.computerChoice').textContent = `Computer chose: ${computerChoice/*.charAt(0).ToUpperCase() + computerChoice.slice(1)*/}`
    document.querySelector('.ties').textContent = `Ties:`;
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`;
    displayRoundWinner();
}

function displayRoundWinner(winner) {
    if(winner == "Player") {
        document.querySelector(".winner").textContent = "You Won the Round";
    }
    else if (winner == "Computer"){
        document.querySelector(".winner").textContent = "The Computer Won the Round";
    }
    else{
        document.querySelector(".winner").textContent = "The Round was a Tie"
    }
}

function tallyWins(){
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`;
    document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`;
    document.querySelector(".ties").textContent = `Score: ${ties}`;

}

function computerSelect(){

    let choices = ["rock", "paper", "scissors"]
    var randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[randomIndex];

    return computerChoice;
}

function checkWins(){
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const tie = winners.filter((item) => item == "Tie").length;
    return Math.max(pWinCount, cWinCount)
}

function checkWinner(playerChoice, computerChoice){

    if(
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ){
            return "Player";
    }

    else if (playerChoice == computerChoice){
        return "Tie"
    }

    else{
        return "Computer"
    }    

}

function setWins(){
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winner.filter((item) => item == "Tie").length;
}
        
startGame();
    

     