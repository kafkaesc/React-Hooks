import React, { useState } from 'react';

import ClassContextComponent from '../contextComponents/ClassContextComponent';
import FunctionContextComponent from '../contextComponents/FunctionContextComponent';

export const ThemeContext = React.createContext();

export default function UseContextWithClassAndFunctionDemo() {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		setDarkMode((val) => !val);
	}

	return (
		<>
			<ThemeContext.Provider value={darkMode}>
				<button onClick={toggleDarkMode} style={{ margin: '1rem 2rem 0 2rem' }}>
					Toggle Dark Mode
				</button>
				<ClassContextComponent />
				<FunctionContextComponent />
			</ThemeContext.Provider>
		</>
	);
}
