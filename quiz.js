const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-button");
const output1 = document.querySelector("#output");

const correctAnswers = ["90°", "Right-Angled", "One Right Angle", "12, 16, 20", "Equilateral Triangle", "Three"];

function calculateScore() {
	let score = 0;
	let index = 0;
	const formResults = new FormData(quizForm);
	for (let value of formResults.values()) {
		if (value === correctAnswers[index++]) {
			score++;
		}
	}
	output1.innerText = "Your Score is " + score + " / 6";
}

submitAnswerButton.addEventListener("click", calculateScore);
