const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const renderWidth = 1920;
const renderHeight = 1080;

let width = 0;
let height = 0;

const render = () => {

	const xScale = width / renderWidth;
	const yScale = height / renderHeight;
	const scale = Math.min(xScale, yScale);

	context.save();

	if (xScale > yScale) {
		context.translate(Math.floor((width - (renderWidth * scale)) / 2), 0);
	} else {
		context.translate(0, Math.floor((height - (renderHeight * scale)) / 2));
	}

	context.scale(scale, scale);

	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(renderWidth, 0);
	context.lineTo(renderWidth, renderHeight);
	context.lineTo(0, renderHeight);
	context.closePath();
	context.fill();

	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(renderWidth / 2, renderHeight / 2);
	context.lineTo(renderWidth, 0);
	context.lineTo(renderWidth, renderHeight);
	context.lineTo(renderWidth / 2, renderHeight / 2);
	context.lineTo(0, renderHeight);
	context.closePath();
	context.fillStyle = 'red';
	context.fill();

	context.restore();
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