const body = document.getElementById("container");
const btn = document.getElementById("btn");
const colorInfo = document.querySelector(".color-info");

btn.addEventListener("click", function () {
	const randomBackgroundColor = (body.style.backgroundColor =
		"rgb(" +
		Math.round(Math.random() * 255) +
		"," +
		Math.round(Math.random() * 255) +
		"," +
		Math.round(Math.random() * 255) +
		")");
	colorInfo.textContent = randomBackgroundColor;
});
