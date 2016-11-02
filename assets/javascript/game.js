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



/*console.log(thronesList);
console.log(chosenWordArray);*/

/* ----- needs to be inside of a function that starts and restarts the game ----- */


/* picking an item out of my master list to play hangman with*/
function hangmanSelector() {
	chosenWordArray =[];
	templateArray =[];
	var selector = Math.floor(Math.random()* thronesList.length);
	var hangmanIndex = thronesList[selector];
	/*console.log(hangmanIndex);
	console.log(selector);*/
/* parsing out the word that was chosen into characters and putting into a string*/
	for (var i =0 ; i < hangmanIndex.length ; i++ ){
		 chosenWordArray.push(hangmanIndex.charAt(i));
		 templateArray.push(hangmanIndex.charAt(i))
		
	}
	 console.log("chosen word is "+chosenWordArray);
	 console.log("template word is "+templateArray);
 }

/* -------------------------------------------------------------*/
hangmanSelector();


document.onkeyup = function(event) {

/* listening and picking up user entry*/	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("user guesses the letter: " + userGuess);

/* looking to see if user entry is in the current array and counting remaining guesses --edit this comment*/ 
	var isPartOfWord = chosenWordArray.indexOf(userGuess);

	console.log("what isvariable is part of word = "+ isPartOfWord);
/*checks to see if and element in the chosen word appears more than once*/
	    var count = 0;
	    for (var i = 0; i < chosenWordArray.length; i++) {
	        if (chosenWordArray[i] === userGuess) {
	            count++;
	        }
	    }
	    console.log(chosenWordArray.length);
	console.log("the count of items in an array is " + count);


/*this will check and see if the guess is part of the main word & account for duplicate letters ---edit this comment */
		if(isPartOfWord >= 0){
			for (var i =0; i < count; i++){
			console.log(" this is part of hangan word");
			templateArray.pop();
			console.log("the new template array is " + templateArray);
			}
		} else {
			console.log("this is not in word");
			remainingGuesses--;
		}
	console.log("guesses remaining: " +remainingGuesses);

/* stops user from putting in the same letter --------needs work */
	var isAlreadyTyped = lettersGuessed.indexOf(userGuess);
	if(isAlreadyTyped > 0){
		alert(" you already typed that letter");

	} else {
		console.log("you have not typed this before");
	}
	console.log("isalreadytyped: " + isAlreadyTyped);
	console.log("letters guessed array is " +lettersGuessed);


/* letters already guessed */ 
	lettersGuessed.push(userGuess);
	console.log("letters guessed already: " + lettersGuessed);

/* determines if game is over user lost*/
	if (remainingGuesses === 0) {
		userWon = true;
		gameOver = true;
		gamesLost++;
	}

/* determines if game is over and user won*/
	if (templateArray.length === 0) {
		userLost = true;
		gameOver = true;
		gamesWon++;
	}

/* if game needs to be reset (player wins or looses)*/
	if (gameOver === true && userWon === true) {
		hangmanSelector();
		remainingGuesses =10;
		lettersGuessed =[];
		gamesWon++;
		userLost = false;
		gameOver = false;

	} else if (gameOver === true && userLost === true) {
		hangmanSelector();
		remainingGuesses =10;
		lettersGuessed =[];
		gamesLost++;
		userLost = false;
		gameOver = false;
	} 
	else {
		/*do nothing*/
	}









}


