import FieldLayout from './FieldLayout';

export default function FieldContainer({
	field,
	isGameEnded,
	currentPlayer,
	setField,
	setCurrentPlayer,
}) {
	function toggleCurrentPlayer() {
		currentPlayer == 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
	}
	function markCell() {
		if (field[event.target.closest('button').id] === '' && isGameEnded === false) {
			const nextField = field.map((item, index) => {
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
		}
	}
	function defineChampion() {}

	function HandleClickOnButton(event) {
		toggleCurrentPlayer();
		defineChampion();
	}

	return <FieldLayout field={field} click={HandleClickOnButton} />;
}
