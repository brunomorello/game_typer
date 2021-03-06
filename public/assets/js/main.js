var initialTimer = $('#game-timer').text();
var typeArea = $('.type-area');


$(function() {

	updatePhraseLength();
	initializeCounters();
	inputedValueValidator();
	runTimer();
	$("#restart-game").click(restartGame);
	updateScore();

	//Framework selectize
	$('#users').selectize({
		create: true,
		sortField: 'text'
	});

	//Framework Tooltipster
	$(".tooltip").tooltipster({
		trigger: "custom"
	});
	
});

function updatePhraseLength() {
	
	var phrase = $('.phrase').text();
	var countWords = phrase.split(" ").length;
	var phraseLenght = $('#prhase-length').text(countWords);

}

function initializeCounters() {

	typeArea.on('input', function() {

		var content = typeArea.val();

		var wordsCount = content.split(/\S+/).length -1;
		$('#count-words').text(wordsCount);

		var charsCount = content.length;
		$('#count-chars').text(charsCount);

	});
	
}

function runTimer() {
	
	typeArea.one('focus', function() {

		var remainingTimer = $('#game-timer').text();
		
		$('#restart-game').attr("disabled", true);

		var idInterval = setInterval(function() {
			
			remainingTimer--;
			$('#game-timer').text(remainingTimer);

			if (remainingTimer < 1) {
				typeArea.attr('disabled', true);
				clearInterval(idInterval);
				$('#restart-game').attr("disabled", false);
				typeArea.toggleClass("type-area-inactivated");

				addNewScore();

			}

		}, 1000);

	});

}

function restartGame() {
	
	typeArea.attr('disabled', false);
	typeArea.val("");
	
	$('#count-words').text("0");
	$('#count-chars').text("0");
	$('#game-timer').text(initialTimer);
	runTimer();
	
	typeArea.toggleClass("type-area-inactivated");
	typeArea.removeClass("type-area-incorrect");
	typeArea.removeClass("type-area-correct");

}

function inputedValueValidator() {


	typeArea.on("input", function() {
		
		var phrase = $('.phrase').text();
		var valueInputed = typeArea.val();

		if ( phrase.startsWith(valueInputed) ) {
			//console.log("its correct");
			typeArea.addClass("type-area-correct");
			typeArea.removeClass("type-area-incorrect");

		} else {
			//console.log("its incorrect");
			typeArea.addClass("type-area-incorrect");
			typeArea.removeClass("type-area-correct");
		}

	});
}

function updateInitialTime(timer) {

	//update global var initialTimer
	initialTimer = timer;
	$("#game-timer").text(timer);
}