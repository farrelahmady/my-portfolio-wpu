window.onresize = function reportWindowSize() {
	let title = "";

	if (window.matchMedia("(min-width: 1536px)").matches) {
		title += " 2xl | ";
	} else if (window.matchMedia("(min-width: 1280px)").matches) {
		title += "xl | ";
	} else if (window.matchMedia("(min-width: 1024px)").matches) {
		title += " lg | ";
	} else if (window.matchMedia("(min-width: 768px)").matches) {
		title += " md | ";
	} else if (window.matchMedia("(min-width: 640px)").matches) {
		title += "sm | ";
	}
	title += "My Portfolio";

	document.querySelector("title").text = title;
};

// Hamburger
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-active");
});
