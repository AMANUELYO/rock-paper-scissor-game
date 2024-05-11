

let compScore =0;
let playerScore =0;
const container = document.querySelector("#container");
const txt = document.querySelector("#txt") 
const secTxt = document.querySelector("#secondTxt")
const thirdTxt = document.querySelector("#thirdTxt");
const restartBtn = document.querySelector("#restartBtn");


let option = ["rock","paper", "scissor"]
function getComputerChoice () {
  return option[Math.floor(Math.random()*option.length)]
   
}


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

}
function getScore (computerSelection,playerSelection){
    const score = decideWinner(computerSelection, playerSelection)
    
      if (score==="lose") {
         return (`comp score: ${compScore+=1}
         your score: ${playerScore}`)
      } 
    
      else if(score==="win"){
         return (`your score:  ${playerScore+=1}
          comp score: ${compScore}`)
      }
    
      else if (score==="tie") {
         return (`comp score: ${compScore} 
          your score: ${playerScore}`)
         }
    
}
function finalScore(computerSelection,playerSelection) {
    
    if(compScore==5&&compScore>playerScore) {
        return "game lose"
    }else if (playerScore==5&&playerScore>compScore) {
        return "game win"
    }
}
function game () {

    
  container.addEventListener("click", function(event){
    computerSelection = getComputerChoice()

    target = event.target
    if(target.id=="btn1") {
       playerSelection="rock"
    }else if (target.id=="btn2") {
       playerSelection="paper"
    }else if (target.id=="btn3") {
        playerSelection="scissor"
    }

    txt.textContent=(playRound(computerSelection,playerSelection));
        
    secTxt.textContent=(getScore(computerSelection,playerSelection))
 const fSoccer = finalScore(computerSelection,playerSelection)
 if(fSoccer=="game lose") {
    txt.textContent="",
     secTxt.textContent="",
   
     thirdTxt.textContent=`you lose the game, press the restart button to play again.
     your final score: ${playerScore} - comp final score: ${compScore}` 
     , compScore ==  0, playerScore == 0
 }
 else if (fSoccer=="game win") {
    txt.textContent="",
  secTxt.textContent="",
 
  thirdTxt.textContent=`you win the game,press the restart button to play again. 
  your final score: ${playerScore} - comp final score: ${compScore}` , 
  compScore=0,playerScore=0

 }

 restartBtn.addEventListener("click",function(){
    thirdTxt.textContent = ""
    txt.textContent = ""
    secTxt.textContent = ""

    compScore=0,
    playerScore=0
 
 })
});



}

  game()