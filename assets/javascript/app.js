$(document).ready(function() {
	$("#start-button").show();
	$("#game").hide();
})

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeLeft = 120;
var intervalId;

function decrement() {
	timeLeft--;
	$("#countdown").text("Time remaining: " + timeLeft + " seconds");
	// console.log(timeLeft);
	if (timeLeft === 0) {
		timeUpResults();
		displayResults();
		stop();
	}
}

function startTimer() {
	intervalId = setInterval(decrement, 1000);
}

function stop() {
	clearInterval(intervalId);
}

function printQuestions() {
	$("#start-button").hide();
	$("#game").show();
	startTimer();
}

function getResults() {
	event.preventDefault();
	var checkedAnswers = $("input[type='radio']:checked");
	var howManyChecked = checkedAnswers.length;
	unanswered = 20 - howManyChecked;

	for (i=0; i<howManyChecked; i++) {
		if (checkedAnswers[i].value === "correct") {
			correct++;
		}
		else {
			incorrect++;
		}
	}
}

function timeUpResults() {
	var checkedAnswers = $("input[type='radio']:checked");
	var howManyChecked = checkedAnswers.length;
	unanswered = 20 - howManyChecked;

	for (i=0; i<howManyChecked; i++) {
		if (checkedAnswers[i].value === "correct") {
			correct++;
		}
		else {
			incorrect++;
		}
	}
}

function displayResults() {
	$("#main").empty();
	var newDiv = $("<div>");
	newDiv.attr("class", "col-md-12");
	newDiv.attr("id", "resultDiv");
	var h = $("<h3>");
	h.text("All done! Here is your score:");
	var p = $("<p>");
	p.html("Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "Unanswered: " + unanswered);
	newDiv.append(h);
	newDiv.append(p);
	$("#main").append(newDiv);
}

$(document).on("click", "#start-button", function() {
	printQuestions();
})

$(document).on("click", "#finish", function() {
	getResults();
	displayResults();
});