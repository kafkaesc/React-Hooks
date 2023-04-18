import { useEffect, useRef, useState } from 'react';

export default function UseRefDemo() {
	const [name, setName] = useState('');
	/* useRef does not trigger a re-render the way useState does.
	 * Using useState instead of useRef below would create an
	 * endless render loop. */
	const renderCount = useRef(1);
	/* useRef to reference elements in the JSX */
	const nameInput = useRef();

	function focus() {
		nameInput.current.focus();
	}

	useEffect(() => {
		renderCount.current += 1;
	});

	return (
		<>
			<label for="nameInput">Name: </label>
			<input
				id="nameInput"
				onChange={(ev) => setName(ev.target.value)}
				ref={nameInput}
				value={name}
			/>
			<div>My name is {name}</div>
			<button onClick={focus}>Focus the Name Input</button>
			<hr />
			<div>I rendered {renderCount.current} times</div>
		</>
	);
}
