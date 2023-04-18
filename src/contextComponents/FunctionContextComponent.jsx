import { useContext } from 'react';
import { ThemeContext } from '../hooks/UseContextWithClassAndFunctionDemo';

export default function FunctionContextComponent() {
	const darkMode = useContext(ThemeContext);
	const themeStyles = {
		backgroundColor: darkMode ? '#222' : '#eee',
		border: 'solid 1px #222',
		color: darkMode ? '#eee' : '#222',
		margin: '1rem 2rem',
		padding: '2rem',
	};
	return <div style={themeStyles}>Function Context</div>;
}
