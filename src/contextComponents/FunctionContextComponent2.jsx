import { useDarkMode, useDarkModeUpdate } from './DarkModeContext';

export default function FunctionContextComponent() {
	const darkMode = useDarkMode();
	const toggleDarkMode = useDarkModeUpdate();

	const themeStyles = {
		backgroundColor: darkMode ? '#222' : '#eee',
		border: 'solid 1px #222',
		color: darkMode ? '#eee' : '#222',
		margin: '1rem 2rem',
		padding: '2rem',
	};

	return (
		<>
			<button onClick={toggleDarkMode} style={{ margin: '1rem 2rem 0 2rem' }}>
				toggle
			</button>
			<div style={themeStyles}>Function Context</div>
		</>
	);
}
