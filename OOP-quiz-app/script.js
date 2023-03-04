// OOP: Nesne Tabanlı Programlama
const startBtn = document.querySelector(".btn-start");
const nextBtn = document.querySelector(".next-btn");
const quizBox = document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';

function Question(questionText, answerOptions, correctAnswer) {
	this.questionText = questionText;
	this.answerOptions = answerOptions;
	this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
	return answer === this.correctAnswer;
};

let questions = [
	new Question(
		"1- Aşağıdakilerden hangisi JavaScript paket yönetim uygulamasıdır?",
		{
			a: "Node.JS",
			b: "Typescript",
			c: "Npm",
		},
		"c"
	),

	new Question(
		"2- Aşağıdakilerden hangisi JavaScript Framework'ü değildir?",
		{
			a: "Node.JS",
			b: "React",
			c: "Vue",
		},
		"a"
	),

	new Question(
		"3- Aşağıdakilerden hangisi bir programlama dilidir?",
		{
			a: "XML",
			b: "Typescript",
			c: "JavaScript",
		},
		"c"
	),
];

function Quiz(questions) {
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
	return this.questions[this.questionIndex];
};

const quiz = new Quiz(questions);

startBtn.addEventListener("click", function () {
	quizBox.classList.add("active");
	showQuestion(quiz.getQuestion());
	showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
	nextBtn.classList.remove("show");
});

nextBtn.addEventListener("click", function () {
	if (quiz.questions.length != quiz.questionIndex + 1) {
		nextBtn.classList.remove("show");
		quiz.questionIndex += 1;
		showQuestion(quiz.getQuestion());
		showQuestionNumber(quiz.questionIndex + 1, quiz.questions.length);
	} else {
		console.log("Quiz is finish.");
	}
});

function showQuestion(question) {
	let questions = `<span>${question.questionText}</span>`;
	let options = "";

	for (let answer in question.answerOptions) {
		{
			options += `	
                    <div class="option">
						          <span><b>${answer}</b>: ${question.answerOptions[answer]}</span>
					          </div>`;
		}
	}

	document.querySelector(".question-text").innerHTML = questions;
	optionList.innerHTML = options;

	const option = optionList.querySelectorAll(".option");

	for (let opt of option) {
		opt.setAttribute("onclick", "optionSelected(this)");
	}
}

function optionSelected(option) {
	let answer = option.querySelector("span b").textContent;
	let question = quiz.getQuestion();

	if (question.checkAnswer(answer)) {
		option.classList.add("correct");
		option.insertAdjacentHTML("beforeend", correctIcon);
	} else {
		option.classList.add("incorrect");
		option.insertAdjacentHTML("beforeend", incCorrectIcon);
	}

	for (let i = 0; i < optionList.children.length; i++) {
		optionList.children[i].classList.add("disabled");
	}

	document.querySelector(".next-btn").classList.add("show");
}

function showQuestionNumber(questionNumber, totalQuestion) {
	let tag = `<span class="badge bg-warning">${questionNumber} / ${totalQuestion}</span>`;
	document.querySelector(".quiz-box .quesiton-index").innerHTML = tag;
}
