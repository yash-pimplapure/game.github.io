let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

function getComputerChoice(){
    const choices = ['r','p','s','l','sp'];
    const randomNumber = (Math.floor(Math.random() * 6));
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "paper";
    if (letter === "s") return "scissor";
    if (letter === "l") return "Lizard";
    if (letter === "sp") return "Spock";
}

function wins(userChoice, computerChoice){
    const smallword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallword} beats  ${convertToWord(computerChoice)} ${smallcompword} .you win`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300)
}

function lose(userChoice, computerChoice){
    const smallword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallword} loses to  ${convertToWord(computerChoice)} ${smallcompword} .you lost`;
     userChoice_div.classList.add('red-glow');
    setTimeout(() =>  userChoice_div.classList.remove('red-glow') , 300);


}

function draw(userChoice, computerChoice){

    const smallword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallword} equalls  ${convertToWord(computerChoice)} ${smallcompword} .its a draw`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() =>  userChoice_div.classList.remove('grey-glow') , 300)
}











function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rl":
        case "rs":
        case "psp":
        case "pr":
        case "sl":
        case "sp":
        case "lsp":
        case "lp":
        case "spr":
        case "sps":
            wins(userChoice, computerChoice);
            break;
        case"rp":
        case "rsp":
        case "ps":
        case "pl":
        case "sr":
        case "ssp":
        case "ls":
        case "spp":
        case "sr":
        case "sl":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spsp":
            draw(userChoice,computerChoice);
            break;
    } 
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"))
    scissor_div.addEventListener('click', () =>  game("s"))
    lizard_div.addEventListener('click', () =>  game("l"))
    spock_div.addEventListener('click', () => game("sp"))
}
main();
