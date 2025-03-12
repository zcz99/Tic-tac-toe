export function CurrentYear() {
	let a = new Date().getFullYear();

	console.log(a);
	return <h1>{a}</h1>;
}
