
let option = ["rock", "paper", "scissor"]
let playerScore=0
let compScore=0
function getComputerChoice() {
let  choice=option[Math.floor(Math.random() * option.length)];

return choice
}getComputerChoice()


// this function is where the winner is known 
function checkWinner(playerSelection, computerSelection) {
  
    if(playerSelection===computerSelection) {
      return "tie"
   }
   else if(playerSelection=="rock"&&computerSelection=="paper"||
      playerSelection=="paper"&&computerSelection=="scissor"||
      playerSelection=="scissor"&&computerSelection=="rock") {
         return "lose"
      }else if(playerSelection=="paper"&&computerSelection=="rock"||
      playerSelection=="scissor"&&computerSelection=="paper"||
      playerSelection=="rock"&&computerSelection=="scissor") { 
        return "win" 
        
   }
  
   else{return "invalid"}
}

// this is where each round of game is played
function playRound (playerSelection, computerSelection) {
   const result = checkWinner(playerSelection,computerSelection)
      
     if (result==="tie") {
    return  "comp: " + computerSelection +" you: " + playerSelection + "      you tie"
          

   } else if (result === "lose" ) {
      return  "comp: " +computerSelection + " you: " + playerSelection+ "     you lose"
   }
   else if (result === "win")  { 
      return "comp: " +computerSelection +" you: "+ playerSelection + "      you win"

   }else {return "invalid input"}
  
} 



// this is the whole game is played
function game () {
   for (let i =0 ;i<=4 ; i++) {
   let input =prompt("rock, paper or scissor")
        let playerSelection = input.toLowerCase();
     
let computerSelection = getComputerChoice();
   
console.log(playRound(playerSelection,computerSelection));

   
   const score = checkWinner(playerSelection, computerSelection)
if (score==="lose") {
   console.log(`comp score:   ${compScore+=1}
    your score ${playerScore} `) 
     
   }else if(score==="win"){
      console.log(`your score: ${compScore}
       comp score: ${playerScore+=1}`)
   }
   else if (score==="tie") {
      console.log(`comp score ${compScore} 
       your score ${playerScore}`)
   }
  
   }
   if (compScore>playerScore) {
      console.log("you lose Game over ):")
   }else if(compScore<playerScore){
      console.log("You win (:")
   }else if (compScore>0&&playerScore>0&&compScore===playerScore){
      console.log("you tie")
   }else {console.log("BYE")}
}
game()

