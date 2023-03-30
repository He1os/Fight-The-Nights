//object
const playerCharacter = document.querySelector('.player-character')
const compCharacter = document.querySelector('.comp-character')
const playerScore = document.querySelector('.playerScore')
const computerScore = document.querySelector('.computerScore')
const whoGetsPoints = document.querySelector('.whoGetsPoints')

let num = 0 
let computerCharacter
let playerPoints = 0
let computerPoints = 0


//functions

function resetGame(){
    playerCharacter.src = "transparent.png"
    compCharacter.src = "transparent.png"
    playerPoints = 0
    computerPoints = 0
    setPoints()
    whoGetsPoints.innerHTML = "Outcome"

}
function randomNumber() {
   return Math.floor(Math.random()*3)
    
}

function characterChoice(character){
    playerCharacter.src=character + ".png"
    

    const characters = ["wizard", "archer", "knight"]
        num = randomNumber()
    compCharacter.src = characters[num] + ".png"
    
    computerCharacter = characters[num]
    gameLogic(character,computerCharacter)

    // Slumptal 0, 1 eller 2
    // plocka ut rätt gubbe

}
function gameLogic(character, computerCharacter) {
    
    if(character == computerCharacter){
        whoGetsPoints.innerHTML = "It's a tie"
    } else if(character == 'wizard' && computerCharacter == 'archer') {
        whoGetsPoints.innerHTML = "Computer scores"
        computerPoints++
    } else if(character == 'knight' && computerCharacter == 'wizard'){
        whoGetsPoints.innerHTML = "Computer scores"
        computerPoints++
    } else if(character == 'archer' && computerCharacter == 'knight'){
        whoGetsPoints.innerHTML = "Computer scores"
        computerPoints++
    } else {
        whoGetsPoints.innerHTML = "Player scores"
        playerPoints++
        
    }
    setPoints()
    if(playerPoints == 5) {
        alert("Player wins")
        resetGame()
    } else if(computerPoints == 5) {
        alert("Computer wins!")
        resetGame()
    }
}
function setPoints(){
    playerScore.innerText = "Play: " + playerPoints
    computerScore.innerText = "Comp: " + computerPoints
}
