$("#new-random-phrase").click(newRandomPhrase);

function newRandomPhrase() {
	
	//request array of phrases on localhost
	$.get("http://localhost:3000/frases", generateRandomPhrase)

}

function generateRandomPhrase(data) {

	var phrase = $(".phrase");

	var randomIndex = Math.floor( Math.random() * data.length );

	phrase.text(data[randomIndex].texto);

	updatePhraseLength();
	updateInitialTime(data[randomIndex].tempo);

}