const toggleAble = document.querySelector(".toggleable");
const toggleAble2 = document.querySelector(".toggleable2");
const toggleAble3 = document.querySelector(".toggleable3");
const toggleAble4 = document.querySelector(".toggleable4");
const toggleAble5 = document.querySelector(".toggleable5");
const toggleAble6 = document.querySelector(".toggleable6");
const toggleAble7 = document.querySelector(".toggleable7");
const toggleAble8 = document.querySelector(".toggleable8");
const toggleAble9 = document.querySelector(".toggleable9");
const toggleAble10 = document.querySelector(".toggleable10");
const toggleAble11 = document.querySelector(".toggleable11");
const toggleAble12 = document.querySelector(".toggleable12");
const toggleAble13 = document.querySelector(".toggleable13");
const toggleAble14 = document.querySelector(".toggleable14");
const toggleAble15 = document.querySelector(".toggleable15");
const toggleAble16 = document.querySelector(".toggleable16");
const toggleAble17 = document.querySelector(".toggleable17");
const svgMap = document.querySelector(".svg-container");
const backToMap = document.querySelectorAll(".back-to-map");
const scrollingEffect = document.getElementsByTagName("section");

const hualienMap = document
	.getElementById("15")
	.addEventListener("click", result);
const yilanMap = document
	.getElementById("6")
	.addEventListener("click", result2);
const newTaipeiMap = document
	.getElementById("10")
	.addEventListener("click", result3);
const keelungMap = document
	.getElementById("7")
	.addEventListener("click", result4);
const taipeiMap = document
	.getElementById("9")
	.addEventListener("click", result5);
const taitungMap = document
	.getElementById("19")
	.addEventListener("click", result6);
const pingtungMap = document
	.getElementById("2")
	.addEventListener("click", result7);
const kaohsiungMap = document
	.getElementById("1")
	.addEventListener("click", result8);
const tainanMap = document
	.getElementById("3")
	.addEventListener("click", result9);
const chiayiMap = document
	.getElementById("13")
	.addEventListener("click", result10);
const yunlinMap = document
	.getElementById("18")
	.addEventListener("click", result11);
const changhuaMap = document
	.getElementById("12")
	.addEventListener("click", result12);
const taichungMap = document
	.getElementById("17")
	.addEventListener("click", result13);
const miaoliMap = document
	.getElementById("8")
	.addEventListener("click", result14);
const hsinchuMap = document
	.getElementById("5")
	.addEventListener("click", result15);
const taoyuanMap = document
	.getElementById("11")
	.addEventListener("click", result16);
const nantouMap = document
	.getElementById("16")
	.addEventListener("click", result17);

function result() {
	toggleAble.classList.toggle("active");

	if (toggleAble.classList.contains("active")) {
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble.classList.remove("active");
			});
		}
	}
}

function result2() {
	toggleAble2.classList.toggle("active");

	if (toggleAble2.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble2.classList.remove("active");
			});
		}
	}
}
function result3() {
	toggleAble3.classList.toggle("active");

	if (toggleAble3.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble3.classList.remove("active");
			});
		}
	}
}
function result4() {
	toggleAble4.classList.toggle("active");

	if (toggleAble4.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble4.classList.remove("active");
			});
		}
	}
}
function result5() {
	toggleAble5.classList.toggle("active");

	if (toggleAble5.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble5.classList.remove("active");
			});
		}
	}
}
function result6() {
	toggleAble6.classList.toggle("active");

	if (toggleAble6.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble6.classList.remove("active");
			});
		}
	}
}
function result7() {
	toggleAble7.classList.toggle("active");

	if (toggleAble7.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble7.classList.remove("active");
			});
		}
	}
}
function result8() {
	toggleAble8.classList.toggle("active");

	if (toggleAble8.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble8.classList.remove("active");
			});
		}
	}
}
function result9() {
	toggleAble9.classList.toggle("active");

	if (toggleAble9.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble9.classList.remove("active");
			});
		}
	}
}
function result10() {
	toggleAble10.classList.toggle("active");

	if (toggleAble10.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble10.classList.remove("active");
			});
		}
	}
}
function result11() {
	toggleAble11.classList.toggle("active");

	if (toggleAble11.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble11.classList.remove("active");
			});
		}
	}
}
function result12() {
	toggleAble12.classList.toggle("active");

	if (toggleAble12.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble12.classList.remove("active");
			});
		}
	}
}
function result13() {
	toggleAble13.classList.toggle("active");

	if (toggleAble13.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble13.classList.remove("active");
			});
		}
	}
}
function result14() {
	toggleAble14.classList.toggle("active");

	if (toggleAble14.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble14.classList.remove("active");
			});
		}
	}
}
function result15() {
	toggleAble15.classList.toggle("active");

	if (toggleAble15.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble16.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble15.classList.remove("active");
			});
		}
	}
}
function result16() {
	toggleAble16.classList.toggle("active");

	if (toggleAble16.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble17.classList.remove("active");
		svgMap.style.display = "none";
		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble16.classList.remove("active");
			});
		}
	}
}
function result17() {
	toggleAble17.classList.toggle("active");

	if (toggleAble17.classList.contains("active")) {
		toggleAble.classList.remove("active");
		toggleAble2.classList.remove("active");
		toggleAble3.classList.remove("active");
		toggleAble4.classList.remove("active");
		toggleAble5.classList.remove("active");
		toggleAble6.classList.remove("active");
		toggleAble7.classList.remove("active");
		toggleAble8.classList.remove("active");
		toggleAble9.classList.remove("active");
		toggleAble10.classList.remove("active");
		toggleAble11.classList.remove("active");
		toggleAble12.classList.remove("active");
		toggleAble13.classList.remove("active");
		toggleAble14.classList.remove("active");
		toggleAble15.classList.remove("active");
		toggleAble16.classList.remove("active");
		svgMap.style.display = "none";

		for (let i = 0; i < backToMap.length; i++) {
			backToMap[i].addEventListener("click", function () {
				svgMap.style.display = "block";
				toggleAble17.classList.remove("active");
			});
		}
	}
}
