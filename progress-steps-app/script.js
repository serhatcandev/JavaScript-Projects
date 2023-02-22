const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

nextBtn.addEventListener("click", function () {
	currentActive++;

	if (currentActive > circle.length - 1) {
		currentActive = circle.length;
	}
	update();
});

prevBtn.addEventListener("click", function () {
	currentActive--;

	if (currentActive < 1) {
		currentActive = 1;
	}

	update();
});

function update() {
	circle.forEach(function (circle, idx) {
		if (idx < currentActive) {
			circle.classList.add("active");
		} else {
			circle.classList.remove("active");
		}
	});

	const actives = document.querySelectorAll(".active");

	progress.style.width =
		((actives.length - 1) / (circle.length - 1)) * 100 + "%";

	if (currentActive === 1) {
		prevBtn.disabled = true;
	} else if (currentActive === circle.length) {
		nextBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
		nextBtn.disabled = false;
	}
}
prevBtn.disabled = true;
