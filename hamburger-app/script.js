const sidebar = document.querySelector(".sidebar");
const hamburgerBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

document.addEventListener("click", function (e) {
	if (
		!e.composedPath().includes(sidebar) &&
		!e.composedPath().includes(hamburgerBtn)
	) {
		sidebar.classList.remove("show-sidebar");
	}
});

hamburgerBtn.addEventListener("click", function () {
	sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
	sidebar.classList.toggle("show-sidebar");
});
