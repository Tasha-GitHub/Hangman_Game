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

/* looking to see if user entry is in the current array and counting remaining guesses*/ 
	/*console.log(chosenWordArray.indexOf(userGuess));*/
	var isPartOfWord = chosenWordArray.indexOf(userGuess);
	if(isPartOfWord >= 0){
		console.log(" this is part of hangan word");
		templateArray.pop();
		console.log("the new template array is " + templateArray);
	} else {
		console.log("this is not in word");
		remainingGuesses--;
	}
	console.log("guesses remaining: " +remainingGuesses);

/* letters already guessed */ 
	lettersGuessed.push(userGuess);
	console.log("letters guessed already: " + lettersGuessed);


/* determines if game is over user lost*/
if (remainingGuesses === 0) {
	userWon = true;
	gameOver = true;
}

/* determines if game is over and user won*/
if (templateArray.length === 0) {
	userLost = true;
	gameOver = true;
}

/* if game needs to be reset (player wins or looses)*/
if (gameOver === true && userWon === true) {
	hangmanSelector();
	/*add in template word reset*/
	remainingGuesses =10;
	lettersGuessed =[];
	gamesWon++;
	userLost = false;
	gameOver = false;
} else if (gameOver === true && userLost === true) {
	hangmanSelector();
	/*add in template word reset*/
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


