import './fieldLayout.module.css';
import styles from './fieldLayout.module.css';
import useSound from 'use-sound';
import clickSound from '../../assets/minecraft-click-myinstants39.com.mp3';

export default function FieldLayout({ field, click, isGameEnded, isDraw }) {
	const [playClickSound] = useSound(clickSound, { volume: 4 });

	return (
		<>
			<div className={styles.field} onClick={click}>
				{field.map((item, index) => {
					return (
						<button
							type="button"
							className={styles.field_button}
							key={index}
							id={index}
							disabled={isGameEnded || isDraw}
							onClick={playClickSound}
						>
							{item}
						</button>
					);
				})}
			</div>
		</>
	);
}
