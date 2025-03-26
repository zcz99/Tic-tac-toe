import './fieldLayout.module.css';
import styles from './fieldLayout.module.css';

export default function FieldLayout({ field, click }) {
	return (
		<div className={styles.field} onClick={click}>
			{field.map((item, index) => {
				return (
					<button
						type="button"
						className={styles.field_button}
						key={index}
						id={index}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
}
