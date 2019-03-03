var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var lettersGuessed = document.getElementById("lettersGuessed");
var guessesLeft = document.getElementById("guessesLeft");

var winScore = 0;
var loseScore = 0;
var randomLetters = [];
var incorrectLetters = [];
var guessCounter = 8;
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"];

var randomLetters = letterChoices[Math.floor(Math.random() * letterChoices.length)];
console.log(randomLetters);

document.onkeyup = function(event){
    if (event.keyCode >= 65 && event.keyCode <= 90) {
    var userInput = event.key;
    var pickedLetter = userInput.toLowerCase();
    }
    console.log(pickedLetter);
   


    var resetGame = function() {
        randomLetters = [];
        incorrectLetters = [];
        guessCounter = 8;

        randomLetters = letterChoices[Math.floor(Math.random() * letterChoices.length)];
        console.log(randomLetters);

        guessesLeft.textContent = guessCounter;
        lettersGuessed.textContent = incorrectLetters;
    }

    

    var letterCheck = function() {
        for (var i = 0; i < randomLetters.length; i++) {
            if (randomLetters[i] === pickedLetter) {
                winScore++;
                wins.textContent = winScore;
                resetGame();

            } else if (randomLetters[i] != pickedLetter){
                incorrectLetters.push(pickedLetter);
                lettersGuessed.textContent = incorrectLetters.join(" ");
                console.log(incorrectLetters);
                guessCounter--;
                guessesLeft.textContent = guessCounter;

                randomLetters = letterChoices[Math.floor(Math.random() * letterChoices.length)];
                console.log(randomLetters);
            }  
            
 
        }
    }
    
    letterCheck();
   

    var loseCheck = function(){
        if (guessCounter === 0){
            loseScore++;
            losses.textContent = loseScore;
            resetGame();
        }
    }

    loseCheck();

}