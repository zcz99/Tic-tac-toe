import './informationLayout.module.css';
import styles from './informationLayout.module.css';

export default function InformationLayout({ isGameEnded, isDraw, currentPlayer, a }) {
	return (
		<>
			<header className={styles.InformationLayout}>
				{(isDraw === true && 'Ничья') ||
					(isDraw === false &&
						isGameEnded === true &&
						`Победа: ${currentPlayer}`) ||
					(isDraw === false &&
						isGameEnded === false &&
						`Ходит: ${currentPlayer}`)}
			</header>
		</>
	);
}
