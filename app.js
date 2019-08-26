let boxes = [].slice.call(document.querySelectorAll('.box'));
let player1 = true;
let player2 = false;
let status = document.querySelector('#status');
let circle = 'https://leadershipcircle.com/wp-content/uploads/2018/02/cropped-favicon-512x512.png';
let cros =
	'https://images.vexels.com/media/users/3/155481/isolated/preview/622b56964a549b765dcaa8652b08ea87-x-mark-scribble-icon-by-vexels.png';
let replay = document.querySelector('#replay');
let gameEnd = false;

boxes.forEach((box) => {
	box.addEventListener('click', (e) => {
		if (gameEnd) return;
		if (e.target.src === circle || e.target.src === cros) return;
		if (player1) {
			e.target.setAttribute('src', circle);
			player1 = false;
			player2 = true;
		} else {
			e.target.setAttribute('src', cros);
			player1 = true;
			player2 = false;
		}
		checkStatus();
	});
});

let checkStatus = function() {
	const maped1 = boxes.map((box) => {
		if (box.firstChild.src === circle) {
			return true;
		} else {
			return false;
		}
	});
	win(maped1, 1);
	const maped2 = boxes.map((box) => {
		if (box.firstChild.src === cros) {
			return true;
		} else {
			return false;
		}
	});
	win(maped2, 2);
};

let win = function(maped, player) {
	if (
		(maped[0] && maped[1] && maped[2]) ||
		(maped[3] && maped[4] && maped[5]) ||
		(maped[6] && maped[7] && maped[8]) ||
		(maped[0] && maped[4] && maped[8]) ||
		(maped[6] && maped[4] && maped[2]) ||
		(maped[0] && maped[3] && maped[6]) ||
		(maped[1] && maped[4] && maped[7]) ||
		(maped[2] && maped[5] && maped[8])
	) {
		status.innerHTML = `Player ${player} win`;
		gameEnd = true;
	}
};

replay.addEventListener('click', () => {
	boxes.forEach((box) => {
		box.firstChild.src = '';
	});
	status.innerHTML = '';
	gameEnd = false;
});
