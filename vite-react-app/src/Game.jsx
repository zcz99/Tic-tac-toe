import { StrictMode, useState } from 'react';
import FieldContainer from './components/Field/FieldContainer.jsx';
import './Game.module.css';
import InformationContainer from './components/Information/InformationContainer.jsx';
import ButtonStartAgain from './components/ButtonStartAgain/ButtonStartAgain.jsx';

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	return (
		<StrictMode>
			<InformationContainer
				isGameEnded={isGameEnded}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
			/>

			<FieldContainer
				field={field}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
				setField={setField}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
			/>
			<ButtonStartAgain
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				setField={setField}
			/>
		</StrictMode>
	);
}
