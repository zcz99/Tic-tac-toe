import styles from './button.module.css';

export default function ButtonStartAgain({
	setCurrentPlayer,
	setIsGameEnded,
	setIsDraw,
	setField,
}) {
	function HandleClick() {
		setCurrentPlayer('X'), setIsGameEnded(false);
		setIsDraw(false), setField(['', '', '', '', '', '', '', '', '']);
	}
	return (
		<button type="button" className={styles.button} onClick={HandleClick}>
			Начать заново
		</button>
	);
}
