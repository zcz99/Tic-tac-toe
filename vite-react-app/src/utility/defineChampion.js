export default function defineChampion(array) {
	let win = false;
	const WIN_PATTERNS = [
		[6, 7, 8],
		[0, 1, 2],
		[3, 4, 5],
		[0, 3, 6], // не работает
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i <= WIN_PATTERNS.length - 1; i++) {
		let searching = array.some((item, index, array) => {
			return (
				(array[WIN_PATTERNS[i][0]] === 'O' &&
					array[WIN_PATTERNS[i][1]] === 'O' &&
					array[WIN_PATTERNS[i][2]] === 'O') ||
				(array[WIN_PATTERNS[i][0]] === 'X' &&
					array[WIN_PATTERNS[i][1]] === 'X' &&
					array[WIN_PATTERNS[i][2]] === 'X')
			);
		});

		if (searching) {
			win = !win;
			break;
		}
	}

	return win;
}
