// Selectors
const textarea = document.getElementById("textarea1");
const fontSizeInput = document.getElementById("font-size");
const boldBtn = document.getElementById("bold-btn");
const italicBtn = document.getElementById("italic-btn");
const underlineBtn = document.getElementById("underline-btn");
const alignLeftBtn = document.getElementById("align-left-btn");
const alignCenterBtn = document.getElementById("align-center-btn");
const alignRightVtn = document.getElementById("align-right-btn");
const upperCaseBtn = document.getElementById("uppercase-btn");
const deleteTextBtn = document.getElementById("delete-text");
const colorBtn = document.getElementById("color-btn");

// Run

fontSizeInput.addEventListener("click", changeFontSize);
boldBtn.addEventListener("click", makeBold);
italicBtn.addEventListener("click", makeItalic);
underlineBtn.addEventListener("click", makeUnderline);
alignLeftBtn.addEventListener("click", makeAlignLeft);
alignCenterBtn.addEventListener("click", makeAlignCenter);
alignRightVtn.addEventListener("click", makeAlignRight);
upperCaseBtn.addEventListener("click", makeUpperCase);
deleteTextBtn.addEventListener("click", deleteText);
colorBtn.addEventListener("change", changeTextColor);

window.addEventListener("load", () => {
	textarea.value = "";
});

// Func

function changeFontSize(e) {
	let value = e.target.value;
	textarea.style.fontSize = value + "px";
}

function makeBold() {
	if (textarea.style.fontWeight == "900") {
		textarea.style.fontWeight = "500";
		boldBtn.classList.remove("active");
	} else {
		textarea.style.fontWeight = "900";
		boldBtn.classList.add("active");
	}
}

function makeItalic() {
	if (textarea.style.fontStyle == "italic") {
		textarea.style.fontStyle = "normal";
		italicBtn.classList.remove("active");
	} else {
		textarea.style.fontStyle = "italic";
		italicBtn.classList.add("active");
	}
}

function makeUnderline() {
	if (textarea.style.textDecoration == "underline") {
		textarea.style.textDecoration = "none";
		underlineBtn.classList.remove("active");
	} else {
		textarea.style.textDecoration = "underline";
		underlineBtn.classList.add("active");
	}
}

function makeAlignLeft() {
	textarea.style.textAlign = "left";
}

function makeAlignCenter() {
	textarea.style.textAlign = "center";
}
function makeAlignRight() {
	textarea.style.textAlign = "right";
}

function makeUpperCase() {
	if (textarea.style.textTransform == "uppercase") {
		textarea.style.textTransform = "none";
		upperCaseBtn.classList.remove("active");
	} else {
		textarea.style.textTransform = "uppercase";
		upperCaseBtn.classList.add("active");
	}
}

function deleteText(e) {
	textarea.style.fontWeight = "normal";
	textarea.style.textAlign = "left";
	textarea.style.fontStyle = "normal";
	textarea.style.textTransform = "none";
	textarea.style.textDecoration = "none";
	textarea.style.color = "black";
	textarea.value = "";
	boldBtn.classList.remove("active");
	italicBtn.classList.remove("active");
	underlineBtn.classList.remove("active");
}

function changeTextColor() {
	let colorValue = colorBtn.value;
	textarea.style.color = colorValue;
}
