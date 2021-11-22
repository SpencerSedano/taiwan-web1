const arrow = document.querySelector(".arrow");

arrow.onclick = function () {
	console.log("Arrow is functioning");
	const exploreSecondPage = document.querySelector(".explore2-grid");
	const pos = exploreSecondPage.getBoundingClientRect();
	const sections = document.querySelector(".container");
	sections.scrollTo(0, pos.top);
};
