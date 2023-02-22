const button = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
	preloader.classList.add("hide-preloader");
});

const preloaderT = function () {};

button.addEventListener("click", function () {
	if (!button.classList.contains("slide")) {
		button.classList.add("slide");
		video.pause();
	} else {
		button.classList.remove("slide");
		video.play();
	}
});
