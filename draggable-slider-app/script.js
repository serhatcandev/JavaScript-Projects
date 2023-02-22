//

const tabsBox = document.querySelector(".tabs-box");
const arrowIcons = document.querySelectorAll(".icon i");
const allTabs = document.querySelectorAll(".tab");

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", stopDrag);

let isDragging = false;

const handleScroll = () => {
	let scrollVal = tabsBox.scrollLeft;
	let maxVal = tabsBox.scrollWidth - tabsBox.clientWidth;
	arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
	arrowIcons[1].parentElement.style.display =
		maxVal > scrollVal ? "flex" : "none";
};

arrowIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		tabsBox.scrollLeft += icon.id === "left" ? -350 : 350;
		setTimeout(() => handleScroll(), 50);
	});
});

allTabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabsBox.querySelector(".active").classList.remove("active");
		tab.classList.add("active");
	});
});

function dragging(e) {
	if (!isDragging) return;
	console.log("dragging");
	tabsBox.scrollLeft -= e.movementX;
	tabsBox.classList.add("dragging");
}

function stopDrag() {
	isDragging = false;
	tabsBox.classList.remove("dragging");
}
