import { useEffect, useState } from 'react';

export default function UseEffectWindowWidthDemo() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function handleResize() {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return <p style={{ fontSize: '32px', margin: '10px' }}>{windowWidth}</p>;
}
