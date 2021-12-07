const sides = document.querySelectorAll(".side-input");
const hypotenuseButton = document.querySelector("#submit-button");
const output1 = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
	const sumOfSquares = a * a + b * b;
	return sumOfSquares;
}
function calculateHypotenuse() {
	let side1 = Number(sides[0].value);
	let side2 = Number(sides[1].value);
	if (side1 <= 0 || side2 <= 0) {
		output1.innerText = "Side Lengths cannot be Negative. Please enter Positive values.";
		return;
	}
	const sumOfSquares = calculateSumOfSquares(side1, side2);
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	output1.innerText = "The Length of Hypotenuse is : " + lengthOfHypotenuse;
}
hypotenuseButton.addEventListener("click", calculateHypotenuse);
