import { useEffect, useMemo, useState } from 'react';

function expensiveFunction(num) {
	for (let i = 0; i < 3000; i++) {
		isPrime(i);
	}
	return num * 2;
}

// This function intentionally not optimized in order
// to demonstrate useMemo for expensive functions
function isPrime(num) {
	if (num <= 1) {
		return false;
	}
	if (num === 2 || num === 3) {
		return true;
	}
	for (let i = 2; i < num; i++) {
		for (let j = 2; j <= i; j++) {
			if (i * j === num) {
				return false;
			}
		}
	}
	return true;
}

export default function UseMemoDemo() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	/* You can contrast the useMemo performance
	 * versus calculating on the next line. */
	//const doubleNumber = expensiveFunction(number);
	const doubleNumber = useMemo(() => {
		return expensiveFunction(number);
	}, [number]);
	/* The use of useMemo prevents the useEffect for
	 * themeStyles from triggering every render */
	//const themeStyles = {
	//	backgroundColor: dark ? '#222' : '#eee',
	//	color: dark ? '#eee' : '#222',
	//};
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: dark ? '#222' : '#eee',
			color: dark ? '#eee' : '#222',
		};
	}, [dark]);

	useEffect(() => {
		console.log('theme changed');
	}, [themeStyles]);

	return (
		<>
			<div style={{ margin: '10px' }}>
				<input
					type="number"
					value={number}
					onChange={(ev) => setNumber(parseInt(ev.target.value))}
				/>
				<button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
			</div>
			<div
				style={{
					border: 'solid 1px #000',
					fontSize: '32px',
					margin: '10px',
					padding: '5px',
					...themeStyles,
				}}
			>
				X2: {doubleNumber}
			</div>
		</>
	);
}
