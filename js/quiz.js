var numberOfPaws = [
		"images/zero5.png",
		"images/one5.png",
		"images/two5.png",
		"images/three5.png",
		"images/four5.png",
		"images/five5.png"

		];

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

var createQuiz = function(){
	return { 
	questions: questions,
	answers: [],
	index: 0,
	start: function(){
		$('.start').hide();
		$('.game').show();
		$('.question-counter').show();
	},
	currentQuestion: function(){
		return this.questions[this.index];
	},
	takeanswer: function(answers){
		var question = this.currentQuestion();
		var position = question.options.indexOf(answers);
		console.log(position);
		$('.game').hide();
		$('.question-counter').hide();
		$('.next').show();
		if (position == question.correct){
			this.answers.push(1);
			$('h3').empty();
			$('h3').append(question.comment);
			$('.correct').show();
		} else {
			$('.wrong').show();
			this.answers.push(0);
		}
	},

	showResults: function(){
			$('.results').show();
			var results = this.answers.reduce(function(a, b) { return a + b; }, 0);
			$('.number-of-correct').text(results);
			this.changePaws(numberOfPaws[results]);
			$('.new-game').show();
	},

	updateQuestion: function(){
			$('.question-number').text(this.index + 1);
			$('.question-counter').show();
			var question = this.questions[this.index];
			$('ul').append('<li><img class="paw" src="images/whitepaw.png">' + question.options[0] + '</li>');
			$('ul').append('<li><img class="paw" src="images/whitepaw.png">' + question.options[1] + '</li>');
			$('ul').append('<li><img class="paw" src="images/whitepaw.png">' + question.options[2] + '</li>');
			this.changeImage(question.image);
			$('.game').show();
		},

	next: function(){
		$('.next').hide();
		$('.correct').hide();
		$('.wrong').hide();
		$('ul').empty();
		if (this.questions.length == this.answers.length){
			this.showResults();
		} else {
			this.index++;
			this.updateQuestion();
		}
		},

		changeImage: function(x) {
			document.getElementById("dog").src=x;
		},

		changePaws: function(x) {
			document.getElementById("pawResults").src=x;
		},

	};
};

var quiz = createQuiz();

$(document).ready(function(){

// Start Button
$('.button').on('click', function(){
	quiz.start();
});

$('ul').on('click', 'li', function(){
	var useranswer = $(this).text();
	quiz.takeanswer(useranswer);
});

$('.next').on('click', function(){
	quiz.next();
});

$('.new-game').on('click', function(){
	quiz = createQuiz();
	$('.results').hide();
	$('.question-counter').hide();
	$('.new-game').hide();
	quiz.start();
	quiz.updateQuestion();

});


//Need to count the number of correct, and display results.
//need to transfer to results page upon completion of last question.
// need to write a function for the ul.append but it keeps breaking on me lol i don't know why


//need to make a reset button
// 














});