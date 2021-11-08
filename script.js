const hualienMap = document
	.getElementById("path2843")
	.addEventListener("click", result);
const yilanMap = document
	.getElementById("path3690")
	.addEventListener("click", result2);
const newTaipeiMap = document
	.getElementById("path3699")
	.addEventListener("click", result3);
const keelungMap = document
	.getElementById("path3635")
	.addEventListener("click", result4);

function result() {
	let toggleAble = document.querySelector(".toggleable");
	toggleAble.classList.toggle("active");
}
function result2() {
	let toggleAble = document.querySelector(".toggleable2");
	toggleAble.classList.toggle("active");
}
function result3() {
	let toggleAble = document.querySelector(".toggleable3");
	toggleAble.classList.toggle("active");
}
function result4() {
	let toggleAble = document.querySelector(".toggleable4");
	toggleAble.classList.toggle("active");
}
