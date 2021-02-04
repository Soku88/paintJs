const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const color = document.getElementsByClassName("jsColor");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 1;

let painting = false;

function stopPainting() {
	painting = false;
}

function startPainting() {
	painting = true;
}

function onMouseMove(e) {
	const x = e.offsetX;
	const y = e.offsetY;
	if (!painting) {
		ctx.beginPath();
		ctx.moveTo(x, y);
	} else {
		ctx.lineTo(x, y);
		ctx.stroke();
	}
}
function handleColor(e) {
	const bgColor = e.target.style.backgroundColor;
	console.log(bgColor);
	ctx.strokeStyle = bgColor;
}

if (canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(color).forEach((color) => color.addEventListener("click", handleColor));
