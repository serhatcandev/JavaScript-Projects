const searchDiv = document.querySelector(".search");
const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
	if (!searchDiv.classList.contains("active")) {
		searchDiv.classList.add("active");
	} else {
		searchDiv.classList.remove("active");
	}
	input.focus();
});

// button.addEventListener("click", function () {
// 	searchDiv.classList.toggle("active");
// 	input.focus();
// });
