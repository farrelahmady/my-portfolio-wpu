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

// Navbar Fixed
window.onscroll = () => {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});
