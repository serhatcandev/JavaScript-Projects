const lengthRange = document.getElementById("length");
const lengthVal = document.getElementById("length-val");

const characters = `ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxwz!\"$%&/()=?@~'\\.\';:+=^*_-"0123456789`;

function randomValue(value) {
	return Math.floor(Math.random() * value);
}

function genPassword() {
	const lengthRangeValue = lengthRange.value;
	lengthVal.textContent = lengthRangeValue;

	let str = "";

	for (let i = 0; i < lengthRangeValue; i++) {
		let random = randomValue(characters.length);
		str += characters.charAt(random);
	}

	output.value = str;
}

function copyClipboard() {
	output.select();
	document.execCommand("copy");
	alert("Password Copied!");
}

genPassword();
