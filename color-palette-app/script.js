const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".btn");
const maxPaletteBoxes = 24;

const generatePalette = window.addEventListener(
	"DOMContentLoaded",
	function () {
		for (let i = 0; i < maxPaletteBoxes; i++) {
			let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
			randomHex = `#${randomHex.padStart(6, "0")}`;

			const color = document.createElement("li");
			color.classList.add("color");
			color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                        <div class="hex-value">${randomHex}</div>`;
			color.addEventListener("click", () => copyColor(color, randomHex));
			container.appendChild(color);
		}
	}
);

refreshBtn.addEventListener("click", refreshPage);

function copyColor(elem, hexVal) {
	const colorElement = elem.querySelector(".hex-value");
	navigator.clipboard.writeText(hexVal).then(() => {
		colorElement.innerText = "Copied";
	});
}

function refreshPage() {
	window.location.reload();
}
