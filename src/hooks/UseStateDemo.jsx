import { useState } from 'react';

export default function UseStateDemo() {
	const [count, setCount] = useState(() => 1);
	const [details, setDetails] = useState({
		color: 'blue',
		count: 0,
		name: 'Edsger',
	});

	function decrementCount() {
		setCount((prev) => prev - 1);
	}

	function incrementCount() {
		setCount((prev) => prev + 1);
	}

	function decrementObjectCount() {
		setDetails((prev) => {
			return { ...prev, count: prev.count - 1 };
		});
	}

	function incrementObjectCount() {
		setDetails((prev) => {
			return { ...prev, count: prev.count + 1 };
		});
	}

	return (
		<>
			<p>
				Name: {details.name}; Color: {details.color};
			</p>
			<label>Count on State Object</label>
			<br />
			<button onClick={decrementObjectCount}>-</button>
			<span>{details.count}</span>
			<button onClick={incrementObjectCount}>+</button>
			<br />
			<label>Count on Basic State</label>
			<br />
			<button onClick={decrementCount}>-</button>
			<span>{count}</span>
			<button onClick={incrementCount}>+</button>
		</>
	);
}
