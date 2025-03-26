import InformationLayout from './InformationLayout';

export default function InformationContainer({ isGameEnded, isDraw, currentPlayer }) {
	return (
		<InformationLayout
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			currentPlayer={currentPlayer}
		/>
	);
}
