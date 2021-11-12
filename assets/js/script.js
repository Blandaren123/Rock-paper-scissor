/*--Declared DOM elements*/
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/*--function random choice of r,p,s for Computer and return of a random choice*/
function getComputerChoice(){
  const choices = ["r", "p", "s"]; 
  const randomNumber = Math.floor(Math.random() * 3); 
  return choices[randomNumber]; 
}
/*--funtion for return text */
function convertToWord (letter) {
  if (letter === "r") return "Rock"; 
  if (letter === "p") return "Paper"; 
  return "Scissors";
}
/*--function with return text if you Score,draw or lose*/
function win(user, comp) {
  userScore ++;
  userScore_span.innerHTML = userScore; 
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = convertToWord(user) + " Beats " + convertToWord(comp) + ". You win!"; 
}

function lose(user, comp) {
  compScore ++;
  userScore_span.innerHTML = userScore; 
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = convertToWord(user) + " Owned by " + convertToWord(comp) + ". You Lose!";  
}

function draw(user, comp) {
  result_div.innerHTML = convertToWord(user) + " Same " + convertToWord(comp) + ". Draw! No Point!"; 
}

/*---This function runs the random choice generation for above*/
function game(userChoice){
  const computerChoice = getComputerChoice(); 
  switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "ps":
      case "rp":
      case "sr":
        lose(userChoice, computerChoice);
         break;
      case "pp":
      case "rr":
      case "ss":
        draw(userChoice, computerChoice);
         break;
  }
 
}

/*--fixed eventlistener och click function*/
function main() {
    rock_div.addEventListener('click', function() {
      game("r");
    })

    paper_div.addEventListener('click', function() {
      game("p");
    })

    scissors_div.addEventListener('click', function() {
      game("s");
    })
}

main();


