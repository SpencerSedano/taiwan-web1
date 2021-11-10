const heading = document.querySelector(".content-heading2");

window.addEventListener("scroll", function () {
	if (heading.getBoundingClientRect().top < window.innerHeight) {
		heading.addEventListener("click", function () {
			window.scrollTo(0, 0);
			console.log("hello");
		});
	}
});

const toTop = document.querySelector(".to-top");

toTop.onclick = function () {
	console.log("SCROLLING...");
	const firstPage = document.querySelector(".index-grid");
	const pos = firstPage.getBoundingClientRect();
	const sections = document.querySelector(".container");
	sections.scrollTo(0, pos.top);
};

// function scrollToTop() {
// 	// Scroll to top logic
// 	rootElement.scrollTo({
// 		top: 0,
// 	});
// }

// toTop.addEventListener("click", scrollToTop);

// toTop.addEventListener("click", function () {
// 	window.scrollTo(0, 0);
// });

// We select the element we want to target
// var target = document.querySelector("footer");

// var scrollToTopBtn = document.querySelector(".to-top");
// var rootElement = document.documentElement;

// // Next we want to create a function that will be called when that element is intersected
// function callback(entries, observer) {
// 	// The callback will return an array of entries, even if you are only observing a single item
// 	entries.forEach((entry) => {
// 		if (entry.isIntersecting) {
// 			// Show button
// 			scrollToTopBtn.classList.add("showBtn");
// 		} else {
// 			// Hide button
// 			scrollToTopBtn.classList.remove("showBtn");
// 		}
// 	});
// }
