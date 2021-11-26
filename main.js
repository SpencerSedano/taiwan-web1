const toTop = document.querySelector(".to-top");

toTop.onclick = function () {
	console.log("UPPPPPPPPPPPPPP...");
	const firstPage = document.querySelector(".index-grid");
	const pos = firstPage.getBoundingClientRect();
	const sections = document.querySelector(".container");
	sections.scrollTo(0, pos.top);
};

const learnMore = document.querySelector(".learn-more");

learnMore.onclick = function () {
	console.log("learn more functioning");
	const secondPage = document.querySelector(".index2-grid");
	const pos = secondPage.getBoundingClientRect();
	const sections = document.querySelector(".container");
	sections.scrollTo(0, pos.top);
};

const popularPlaces = document.querySelector(".popular-places");

popularPlaces.onclick = function () {
	console.log("popular places functioning");
	const thirdPage = document.querySelector(".index3-grid");
	const pos = thirdPage.getBoundingClientRect();
	const sections = document.querySelector(".container");
	sections.scrollTo(0, pos.top);
};

const buttonTaichung = document.querySelector(".button-taichung");
const buttonTaipei = document.querySelector(".button-taipei");
const buttonHualien = document.querySelector(".button-hualien");
const buttonTaitung = document.querySelector(".button-taitung");
const buttonHsinchu = document.querySelector(".button-hsinchu");
const buttonNantou = document.querySelector(".button-nantou");

// buttonTaichung.onclick = function () {
// 	alert("I haven't finished yet, sorry about that :(");
// };

// buttonTaipei.onclick = function () {
// 	alert("I haven't finished yet, sorry about that :(");
// };

// buttonHualien.onclick = function () {
// 	alert("I haven't finished yet, sorry about that :(");
// };

// buttonTaitung.onclick = function () {
// 	alert("I haven't finished yet, sorry about that :(");
// };

// buttonHsinchu.onclick = function () {
// 	alert("I haven't finished yet, sorry about that :(");
// };

// buttonNantou.onclick = function () {
// 	alert("I haven't finished yet, sorry about that :(");
// };
