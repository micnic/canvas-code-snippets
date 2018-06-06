const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let width = 0;
let height = 0;

const render = () => {
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(width, height);
	context.lineTo(0, height);
	context.closePath();
	context.fill();
};

const setSize = () => {
	canvas.width = width = window.innerWidth;
	canvas.height = height = window.innerHeight;
};

const resizeListener = () => {
	setSize();
	render();
};

setSize();
render();

window.addEventListener('resize', resizeListener);