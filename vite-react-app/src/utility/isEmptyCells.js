export default function isEmptyCells(array) {
	const check = array.some((item) => {
		return item === '';
	});
	return check;
}
