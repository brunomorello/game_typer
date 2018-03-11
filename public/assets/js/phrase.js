$("#new-random-phrase").click(newRandomPhrase);
$("#search-phrase").click(searchPhrase);

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

function searchPhrase() {

	//show spinner
	$("#spinner-loading").toggle();

	var phraseId = $("#phrase-id").val();

	//JS object with phrase id
	var data = { id : phraseId };

	//getting phrase by id
	$.get("http://localhost:3000/frases", data, changePhrase)
	  .fail(function () {
	  	//in case of error
	  	$("#error").toggle();

	  	setTimeout(function() {
	  		//hide error msg after 2 seconds
	  		$("#error").toggle();
	  	}, 2000);
	  })
	  .always(function () {
	  	$("#spinner-loading").toggle();
	  })
}

function changePhrase(data) {
	
	var phrase = $(".phrase");
	phrase.text(data.texto);

	updatePhraseLength();
	updateInitialTime(data.tempo);

}