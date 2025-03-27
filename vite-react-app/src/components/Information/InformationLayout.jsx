import './informationLayout.module.css';
import styles from './informationLayout.module.css';

export default function InformationLayout({ isGameEnded, isDraw, currentPlayer }) {
	return (
		<>
			<header className={styles.InformationLayout}>
				<span className={styles.animation}>
					{(isDraw === true && 'Ничья') ||
						(isDraw === false &&
							isGameEnded === true &&
							`Победа: ${currentPlayer}`)}
				</span>
				{isDraw === false && isGameEnded === false && `Ходит: ${currentPlayer}`}
			</header>
		</>
	);
}
