const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let focused = false;
let width = canvas.width;
let height = canvas.height;

canvas.tabIndex = 0;

const render = () => {

	if (focused) {
		context.fillStyle = '#565656';
	} else {
		context.fillStyle = '#ACACAC';
	}

	context.clearRect(0, 0, width, height);
	context.fillRect(0, 0, width, height);
};

const blurListener = () => {
	focused = false;
	render();
};

const focusListener = () => {
	focused = true;
	render();
};

render();

canvas.addEventListener('blur', blurListener);
canvas.addEventListener('focus', focusListener);