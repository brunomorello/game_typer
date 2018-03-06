function addNewScore() {

	var tableBody = $(".score").find("tbody");
	var user = "Bruno";
	var countWords = $("#count-words").text();

	var line = newDeleteLine(user, countWords);
	line.find(".web-button-remove").click(deleteScore);

	tableBody.append(line);
}

function newDeleteLine(user, numberWords) {

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
	$(this).parent().parent().remove();
}