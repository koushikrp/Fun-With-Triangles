const inputs = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#submit-button");
const output1 = document.querySelector("#output");

function sumOfAngles(angle1, angle2, angle3) {
	return angle1 + angle2 + angle3;
}
function isTriangle() {
	output1.style.display = "block";
	if (inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === "") {
		output1.innerText = "Please Enter All the Three Angles.";
		return;
	}
	let angle1 = Number(inputs[0].value);
	let angle2 = Number(inputs[1].value);
	let angle3 = Number(inputs[2].value);
	if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
		output1.innerText = "Angles cannot be Negative. Please Enter Positive values";
		return;
	}
	const sumAngles = sumOfAngles(angle1, angle2, angle3);
	if (sumAngles === 180) {
		output1.innerText = "Congrats! The Angles form a Triangle.";
	} else {
		output1.innerText = "Sorry, The Angles don't form a Triangle.";
	}
}

isTriangleButton.addEventListener("click", isTriangle);
