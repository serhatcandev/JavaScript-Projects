let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else {
			count = 0;
		}

		if (count > 0) {
			value.style.color = "#6fab79";
		} else if (count < 0) {
			value.style.color = "#db1a2a";
		} else {
			value.style.color = "#222";
		}

		value.textContent = count;
	});
});
