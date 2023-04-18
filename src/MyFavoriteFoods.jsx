import { useEffect, useState } from 'react';

export default function MyFavoriteFoods() {
	const [count, setCount] = useState(0);
	const [hasReached10, setHasReached10] = useState(false);

	function incrementCount() {
		setCount((prev) => prev + 1);
	}

	// Runs once on load
	useEffect(() => {}, []);

	// Runs whenever count changes
	useEffect(() => {
		console.log('myFavFoods changed: ' + count);
		if (count >= 10) {
			setHasReached10(true);
		}
	}, [count]);

	// Runs when hasReached10 changes
	useEffect(() => {
		// do something at 10
	}, [hasReached10]);

	return (
		<>
			<h1>My Favorite Foods</h1>
			<p>
				count: {count}; count 10+: {'' + hasReached10}
			</p>
			<button onClick={() => incrementCount()}>Increment</button>
			<br />
		</>
	);
}
