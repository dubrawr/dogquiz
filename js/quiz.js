$(document).ready(function(){

var changeImage = function(x) {
        document.getElementById("dog").src=x;
    };

var changePaws = function(x) {
        document.getElementById("pawResults").src=x;
    };

var numberOfPaws = [
	"images/zero5.png",
	"images/one5.png",
	"images/two5.png",
	"images/three5.png",
	"images/four5.png",
	"images/five5.png"

];

var answers = [];

var questionCounter = 1;
var currentQuestion = 0;
var questions = [
	{
		options: ["Labrador Retriever", "Australian Shepherd", "Border Collie"],
		image: "images/1.png",
		correct: 2,
		comment: "Border Collies are the best doggies ever!"

	},
	{
		options: ["French Bulldog", "Miniature Poodle", "Pug"],
		image: "images/2.png",
		correct: 0,
		comment: "French Bulldogs are super cute!"
	},
	{
		options: ["Dachsund", "Basset Hound", "Jack Russell Terrier"],
		image: "images/3.png",
		correct: 2,
		comment: "Jack Russels like to be active and play!"
	},
	{
		options: ["American Eskimo", "Alaskan Malamute", "Siberian Husky"],
		image: "images/4.png",
		correct: 1,
		comment: "Alaskan Malamutes are SO FLUFFY!"
	},
	{
		options: ["Great Dane", "Greyhound", "Rottweiler"],
		image: "images/5.png",
		correct: 1,
		comment: "Greyhounds run really fast!"
	},

];




console.log(questions[0]);
// Start Button
$('.button').on('click', function(){
	$('.start').hide();
	$('.game').show();
	$('.question-counter').show();
});

$('ul').on('click', 'li', function(){
	var useranswer = $(this).text();
	var question = questions[currentQuestion];
	var position = question.options.indexOf(useranswer);
	console.log(position);
	$('.game').hide();
	$('.question-counter').hide();
	$('.next').show();
	if (position == question.correct){
		answers.push(1);
		$('h3').empty();
		$('h3').append(question.comment);
		$('.correct').show();
	} else {
		$('.wrong').show();
	}

});

$('.next').on('click', function(){
	$('.next').hide();
	$('.correct').hide();
	$('.wrong').hide();
	$('ul').empty();
	if (currentQuestion == 4){
		$('.results').show();
		var results = answers.reduce(function(a, b) { return a + b; }, 0);
		$('.number-of-correct').append(results);
		if (results === 0) {
			changePaws(numberOfPaws[0]);
		} else if (results === 1) {
			changePaws(numberOfPaws[1]);
		} else if (results === 2) {
			changePaws(numberOfPaws[2]);
		}
		else if (results === 3) {
			changePaws(numberOfPaws[3]);
		}
		else if (results === 4) {
			changePaws(numberOfPaws[4]);
		} else 
		changePaws(numberOfPaws[5]);
	} else {
	questionCounter++;
	$('.question-number').text(questionCounter);
	$('.question-counter').show();
	currentQuestion++;
	var question = questions[currentQuestion];
	$('ul').append('<li><img class="paw" src="images/whitepaw.png">' + question.options[0] + '</li>');
	$('ul').append('<li><img class="paw" src="images/whitepaw.png">' + question.options[1] + '</li>');
	$('ul').append('<li><img class="paw" src="images/whitepaw.png">' + question.options[2] + '</li>');
	changeImage(question.image);
	$('.game').show();}
});




//Need to count the number of correct, and display results.
//need to transfer to results page upon completion of last question.
// need to write a function for the ul.append but it keeps breaking on me lol i don't know why


//need to make a reset button
// 














});