

let compScore =0;
let playerScore =0;


function decideWinner (computerSelection, playerSelection) {

    if(computerSelection===playerSelection){
        return "tie";
    }
    else if (computerSelection==="paper" &&playerSelection==="rock"||
              computerSelection==="rock"&& playerSelection==="scissor"||
             computerSelection==="scissor"&& playerSelection==="paper")
              {
                return "lose"
             }
             else if (computerSelection==="rock" &&playerSelection==="paper"||
             computerSelection==="scissor"&& playerSelection==="rock"||
            computerSelection==="paper"&& playerSelection==="scissor"){
                return "win";
            }
        
           else if ( playerSelection===null&&computerSelection===computerSelection) {
            return "null"
           }
            else {
               return "invalid"
            }

}

  function playRound(computerSelection,playerSelection) {

     let result =decideWinner(computerSelection,playerSelection)

     if (result==="tie"){

     return `you: ${playerSelection} - comp: ${computerSelection} 
you tied`
  }

  else if (result === "lose") {
    return `you: ${playerSelection} - comp: ${computerSelection} 
 you lose`
  }

  else if (result === "win") {
     return `you: ${playerSelection} - comp: ${computerSelection} 
  you win`
  }
 
  else if (result==="null") {
   return "input is null"
  }
 
  else {
     return "invalid input!"
  }
}

function game () {

     for(let i = 0 ; i<=4; i++) {

let getComputerChoice = function(){

     let randomNumber= Math.floor(Math.random()*3+1);

const number = randomNumber;

if (number===1) {
     getComputerChoice="rock"
}
else if (number===2) {
     getComputerChoice="paper"

}
else{getComputerChoice="scissor"}

return getComputerChoice

}

let input = prompt("rock, paper or scissor") 
if (input===null){
 playerSelection = input;}
 else{playerSelection=input.toLowerCase()}


 
const computerSelection = getComputerChoice();

console.log(playRound(computerSelection, playerSelection));

const score = decideWinner(computerSelection, playerSelection)

  if (score==="lose") {
     console.log(`comp score: ${compScore+=1}
     your score: ${playerScore}`)
  } 

  else if(score==="win"){
     console.log(`your score:  ${playerScore+=1}
      comp score: ${compScore}`)
  }

  else if (score==="tie") {
     console.log(`comp score: ${compScore} 
      your score: ${playerScore}`)
     }

}
     
if (compScore>playerScore){
     console.log("you lose the game ):")
} 
else if (compScore<playerScore) {
     console.log("you win the game (:")
}

else if (compScore>0&&playerScore>0&&compScore===playerScore) {
     console.log("you tied! play again?")
}

else {
   console.log("BYE!")
}
 }
  game()