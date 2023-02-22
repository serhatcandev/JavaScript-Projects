const text = document.querySelector("span");
const button = document.querySelector("button");

let value = 0;

button.addEventListener("click", function () {
	value++;
	if (value >= 0) {
		text.style.display = "block";
	}
	text.innerHTML = value;
});
