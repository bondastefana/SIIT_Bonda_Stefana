var possibilities = ['rock', 'paper', 'scissors'];
var computer = (Math.random() * 100);
var user = (Math.random() * 100);

function play(computer, user) {
    // rock: 0 - 33
    // paper: 34 - 66
    // scissors: 67-100
    var compChoice = assignChoice(computer)
    var userChoice = assignChoice(user)

    console.log("User choice: ", userChoice);
    console.log("Computer choice: ", compChoice);

    if (compChoice === 'rock' && userChoice === 'paper') {
        return "User wins!";
    } else if (compChoice === 'paper' && userChoice === 'rock') {
        return "Computer wins!";
    } else if (compChoice === 'paper' && userChoice === 'scissors') {
        return "User wins!";
    } else if (compChoice === 'scissors' && userChoice === 'paper') {
        return "Computer wins!";
    } else if (compChoice === 'rock' && userChoice === 'scissors') {
        return "Computer wins!";
    } else if (compChoice === 'scissors' && userChoice === 'rock') {
        return "User wins!";
    } else  {
        return "Equality";
    }  
}

function assignChoice(number) {
    if (number <= 33){
        return possibilities[0];
    } else if (number > 33 && number <= 66) {
        return  possibilities[1];
    } else {
        return  possibilities[2];
    }
}

console.log(play(computer, user));
