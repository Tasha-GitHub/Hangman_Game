/* available words to guess */
var thronesList = ["baratheon", "bolton", "florent", "lannister", "martell","redwyne", "stark", "umber", "targaryen","tully"];
var chosenWordArray =[];
var templateArray =[]; /*used to determine if user won*/
var	remainingGuesses =10;
var gamesWon =0;
var gamesLost =0;
var lettersGuessed =[];
var gameOver = false;
var userWon = false;
var userLost = false;




/* picking an item out of my master list to play hangman with*/
function hangmanSelector() {
	chosenWordArray =[];
	templateArray =[];
	var selector = Math.floor(Math.random()* thronesList.length);
	var hangmanIndex = thronesList[selector];



/* parsing out the word that was chosen into characters and putting into an array*/
	for (var i =0 ; i < hangmanIndex.length ; i++ ){
		 chosenWordArray.push(hangmanIndex.charAt(i));
		 templateArray.push(hangmanIndex.charAt(i))
		
	}

/*--- this part of code will build out the html portion that is of equal length to my word and assign a class for styling----*/
    var targetDiv = document.getElementById("letterBlock");

    for(var i = 0 ; i < chosenWordArray.length; i++){
      var currentLetter = chosenWordArray[i];
      var newDiv = document.createElement("div");
      newDiv.innerHTML = "_";
      targetDiv.appendChild(newDiv);
      newDiv.setAttribute("class", "letterDiv");
    }
   }

/* inital game set up */
hangmanSelector();

/*function will run each time user pushes key*/

document.onkeyup = function(event) {

/* listening and picking up user entry*/	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

/* stops user from putting in the same letter twice*/
	var isAlreadyTyped = lettersGuessed.indexOf(userGuess);
	if(isAlreadyTyped >= 0){
		alert(" you already typed that letter");
		return;

	} else {
	}
/* builds letters already guessed array and pushes to HTML */ 
	lettersGuessed.push(userGuess);
    var newLetterDiv = document.getElementById("lettersGuessed");
    newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";


/* looking to see if user entry is in the current array and counting remaining guesses*/ 
	var isPartOfWord = chosenWordArray.indexOf(userGuess);

/* this part runs the checks to see if element in the chosen word appears more than once*/
	   
	   	var chosenWordDivs = document.getElementsByClassName("letterDiv");

	    var count = 0;
	    for (var i = 0; i < chosenWordArray.length; i++) {
	        if (chosenWordArray[i] === userGuess) {
	            count++;
	            chosenWordDivs[i].innerHTML = "<p>"+ chosenWordArray[i] + "</p>";
	        }


	    }

/*this will check and see if the guess is part of the main word and reduces remaining guesses*/
		if(isPartOfWord >= 0){
			for (var i =0; i < count; i++){
			templateArray.pop();
			}
		} else {
			remainingGuesses--;
			var remainGuessDiv = document.getElementById("remainingGuesses");
    		remainGuessDiv.innerHTML = "<p>" + remainingGuesses + "</p>";
		}

/* runs when game is over and user lost*/
	if (remainingGuesses === 0) {
		userWon = true;
		gameOver = true;
		gamesLost++;
		var newLoseDiv = document.getElementById("loseScore");
    	newLoseDiv.innerHTML = "<p>" + gamesLost + "</p>";		
	}

/* runs when  game is over and user won*/
	if (templateArray.length === 0) {
		userLost = true;
		gameOver = true;
		gamesWon++;
		var newWinDiv = document.getElementById("winScore");
    	newWinDiv.innerHTML = "<p>" + gamesWon + "</p>";
	}
/* runs when game needs to be reset (player wins or looses) is powered by above statements*/
	if (gameOver === true && userWon === true) {
		lettersGuessed =[];
		var newLetterDiv = document.getElementById("lettersGuessed");
    	newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";
		var newResetDiv = document.getElementById("letterBlock");
    	newResetDiv.innerHTML = " ";
    	var newResetRemainingDiv = document.getElementById("remainingGuesses");
    	newResetRemainingDiv.innerHTML = "<p>" + 10 + "</p>";	
		hangmanSelector();
		remainingGuesses =10;
		userLost = false;
		gameOver = false;


	} else if (gameOver === true && userLost === true) {
		lettersGuessed =[];
		var newLetterDiv = document.getElementById("lettersGuessed");
    	newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";
		var newResetDiv = document.getElementById("letterBlock");
    	newResetDiv.innerHTML = " ";
    	var newResetRemainingDiv = document.getElementById("remainingGuesses");
    	newResetRemainingDiv.innerHTML = "<p>" + 10 + "</p>";		
		hangmanSelector();
		remainingGuesses =10;
		userLost = false;
		gameOver = false;
	} 
	else {
		/*do nothing*/
	}

}


