$("#new-random-phrase").click(newRandomPhrase);

function newRandomPhrase() {

	//active spinner
	$("#spinner-loading").show();
	
	//request array of phrases on localhost
	$.get("http://localhost:3000/frases", generateRandomPhrase)
	.fail(function () {
		// when it fails, shows error msg
		$("#error").toggle();

		setTimeout(function() {
			//hide error msg after 2 seconds
			$("#error").toggle();
		}, 2000);
	})
	.always(function () {
		//when request ends
		$("#spinner-loading").hide();
	});

}

function generateRandomPhrase(data) {

	var phrase = $(".phrase");

	var randomIndex = Math.floor( Math.random() * data.length );

	phrase.text(data[randomIndex].texto);

	updatePhraseLength();
	updateInitialTime(data[randomIndex].tempo);

}