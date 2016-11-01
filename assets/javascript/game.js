/* avaiable words to guess */
var thronesList = ["baratheon", "bolton", "florent", "lannister", "martell","redwyne", "stark", "umber", "targaryen","tully"];
var chosenWordArray =[];


console.log(thronesList);
console.log(chosenWordArray);

/* ----- needs to be inside of a function that starts and restarts the game ----- */


/* picking an item out of my master list to play hangman with*/
function hangmanSelector() {
	var selector = Math.floor(Math.random()* thronesList.length);
	var hangmanIndex = thronesList[selector];
	console.log(hangmanIndex);
	console.log(selector);
	/* parsing out the word that was chosen into characters and putting into a string*/
	for (var i =0 ; i < hangmanIndex.length ; i++ ){
		 chosenWordArray.push(hangmanIndex.charAt(i));
		 console.log(chosenWordArray);
	}
 }

/* -------------------------------------------------------------*/


/* listening and picking up user entry*/
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
/*checking to see if the users entry is part of the chosen hangman work*/
	console.log(chosenWordArray.indexOf(userGuess));
	var isPartOfWord = chosenWordArray.indexOf(userGuess);

	if(isPartOfWord >= 0){
		console.log("part of hangan word");
	} else {
		console.log("not in word");
	}

}

/* looking to see if user entry is in the current array*/ 
hangmanSelector();