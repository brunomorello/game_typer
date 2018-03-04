var initialTimer = $('#game-timer').text();
var typeArea = $('.type-area');


$(function() {

	updatePhraseLength();
	initializeCounters();
	runTimer();
	$("#restart-game").click(restartGame);
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
	
	var remainingTimer = $('#game-timer').text();

	typeArea.one('focus', function() {

		var idInterval = setInterval(function() {
			
			remainingTimer--;
			$('#game-timer').text(remainingTimer);

			if (remainingTimer < 1) {
				typeArea.attr('disabled', true);
				clearInterval(idInterval);
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

}