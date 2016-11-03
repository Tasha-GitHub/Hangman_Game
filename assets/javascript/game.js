/* avaiable words to guess */
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
	// console.log(hangmanIndex);
	// console.log(selector);

/* parsing out the word that was chosen into characters and putting into a string*/
	for (var i =0 ; i < hangmanIndex.length ; i++ ){
		 chosenWordArray.push(hangmanIndex.charAt(i));
		 templateArray.push(hangmanIndex.charAt(i))
		
	}
	 console.log("chosen word is "+chosenWordArray);
	//console.log("template word is "+templateArray);


// /*--- this part of code will build out the html portion that is of equal length to my word and assign a class for styling----*/
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
	//console.log("user guesses the letter: " + userGuess);

/* stops user from putting in the same letter twice*/
	var isAlreadyTyped = lettersGuessed.indexOf(userGuess);
	if(isAlreadyTyped >= 0){
		alert(" you already typed that letter");
		return;

	} else {
		//console.log("you have not typed this before");
	}
	//console.log("isalreadytyped: " + isAlreadyTyped);
	//console.log("letters guessed array is " +lettersGuessed);

/* builds letters already guessed array and pushes to HTML */ 
	lettersGuessed.push(userGuess);
	//console.log("letters guessed already: " + lettersGuessed);
    var newLetterDiv = document.getElementById("lettersGuessed");
    newLetterDiv.innerHTML = "<p>" + lettersGuessed + "</p>";


/* looking to see if user entry is in the current array and counting remaining guesses*/ 
	var isPartOfWord = chosenWordArray.indexOf(userGuess);

	//console.log("what isvariable is part of word = "+ isPartOfWord);
/* this part runs the checks to see if and element in the chosen word appears more than once*/
	   
	   	var chosenWordDivs = document.getElementsByClassName("letterDiv");

	    var count = 0;
	    for (var i = 0; i < chosenWordArray.length; i++) {
	        if (chosenWordArray[i] === userGuess) {
	            count++;
	            //console.log("users guess is " + userGuess + " i = " + i + " index of div is "+ chosenWordArray[i]);
	            //console.log(chosenWordDivs[i]);
	            chosenWordDivs[i].innerHTML = chosenWordArray[i];
	        }


	    }

/*this will check and see if the guess is part of the main word and reduces remaining guesses*/
		if(isPartOfWord >= 0){
			for (var i =0; i < count; i++){
			//console.log(" this is part of hangan word");
			templateArray.pop();
			}
		} else {
			//console.log("this is not in word");
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
console.log(lettersGuessed);
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
console.log(lettersGuessed);

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


