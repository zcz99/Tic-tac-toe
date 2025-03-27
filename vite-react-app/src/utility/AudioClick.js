import useSound from 'use-sound';
import clickSound from '../assets/minecraft-click-myinstants39.com.mp3';

export default function AudioClick() {
	const [playSound] = useSound(clickSound);
	return playSound;
}
