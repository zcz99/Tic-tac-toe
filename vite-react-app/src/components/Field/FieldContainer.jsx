import FieldLayout from './FieldLayout.jsx';
import defineChampion from '../../utility/defineChampion.js';
import isEmptyCells from '../../utility/isEmptyCells.js';

export default function FieldContainer({
	field,
	isGameEnded,
	currentPlayer,
	setField,
	setCurrentPlayer,
	setIsGameEnded,
	isDraw,
	setIsDraw,
}) {
	function toggleCurrentPlayer() {
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
		// currentPlayer == 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
	}

	function HandleClickOnButton(event) {
		let nextField;

		if (field[event.target.closest('button').id] === '' && isGameEnded === false) {
			nextField = field.map((item, index) => {
				if (index == event.target.closest('button').id) {
					return (item = `${currentPlayer}`);
				}
				if (item !== '') {
					return item;
				} else {
					return (item = '');
				}
			});

			setField(nextField);
			setIsGameEnded(defineChampion(nextField));
		}

		defineChampion(nextField)
			? setCurrentPlayer(currentPlayer)
			: toggleCurrentPlayer();

		if (isEmptyCells(nextField) === false && defineChampion(nextField) === false) {
			setIsDraw(true);
		}
	}

	return (
		<FieldLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			click={HandleClickOnButton}
		/>
	);
}
