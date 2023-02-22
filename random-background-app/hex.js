const body = document.getElementById("container");
const btn = document.getElementById("btn");
const colorInfo = document.querySelector(".color-info");

btn.addEventListener("click", function () {
	let color = "#";
	const randomColor = Math.random().toString(16).slice(2, 8);
	color += randomColor;
	body.style.backgroundColor = color;
	colorInfo.textContent = color;
});
