$("#toggle-score").click(toggleScore);

function addNewScore() {

	var tableBody = $(".score").find("tbody");
	var user = "Bruno";
	var countWords = $("#count-words").text();

	var line = newDeletableLine(user, countWords);
	line.find(".web-button-remove").click(deleteScore);

	tableBody.prepend(line);
	
	$(".score").slideDown(500);
	scrollScore();
}

function newDeletableLine(user, numberWords) {

	var deletableLine = $("<tr>");

	var userColumn = $("<td>").text(user);
	var numWordsColumn = $("<td>").text(numberWords);
	var deleteColumn = $("<td>");

	var link = $("<a>").attr("href", "#").addClass("web-button-remove");
	var deleteIcon = $("<i>").addClass("small").addClass("material-icons").text("delete");

	// Creating delete column
	link.append(deleteIcon);
	deleteColumn.append(link);

	//Creating deletable line
	deletableLine.append(userColumn);
	deletableLine.append(numWordsColumn);
	deletableLine.append(deleteColumn);

	return deletableLine;

}

function deleteScore() {
	
	event.preventDefault();

	var score = $(this).parent().parent();
	score.fadeOut(1000);
	setTimeout(function() {
		score.remove();
	},1000);

}

function toggleScore() {
	
	//toggle show/hide DOM object
	//$(".score").toggle();

	//slideToggle show/hide DOM softly
	//stop() stops any animation executing and executes only the last animation
	$(".score").stop().slideToggle(1000);

}

function scrollScore() {

	var scorePosition = $(".score").offset().top + "px";

	$("html,body").animate(
		{ scrollTop : scorePosition },
		1000
	);
	
}