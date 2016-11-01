var thronesList = ["baratheon", "bolton", "florent", "lannister", "martell","redwyne", "stark", "umber", "targaryen","tully"];

function hangmanSelector() {
	var selector = Math.floor(Math.random()* thronesList.length);
	var hangmanIndex = thronesList[selector];
	console.log(hangmanIndex);
	console.log(selector);

}

hangmanSelector();