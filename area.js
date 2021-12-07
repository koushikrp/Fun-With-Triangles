const base = document.querySelector("#base");
const height = document.querySelector("#height");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");

function calculateArea() {
	let enteredBase = base.value;
	let enteredHeight = height.value;
	if (enteredBase === "" || enteredHeight === "") {
		output.innerText = "Base or Height cannot be Empty. Please Enter Positive values.";
		return;
	}
	if (Number(enteredBase) <= 0 || Number(enteredHeight) <= 0) {
		output.innerText = "Base or Height cannot be Zero/Negative. Please Enter only Positive values.";
		return;
	}
	output.innerText = "Area of the Triangle is: " + 0.5 * Number(enteredBase) * Number(enteredHeight);
}

submitButton.addEventListener("click", calculateArea);
