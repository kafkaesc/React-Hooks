import React, { useContext, useState } from 'react';

const DarkModeContext = React.createContext();
const DarkModeUpdateContext = React.createContext();

export function useDarkMode() {
	return useContext(DarkModeContext);
}

export function useDarkModeUpdate() {
	return useContext(DarkModeUpdateContext);
}

export function DarkModeProvider({ children }) {
	const [darkMode, setDarkMode] = useState(true);

	function toggleDarkMode() {
		console.log('toggleDarkMode');
		setDarkMode((val) => !val);
	}

	return (
		<DarkModeContext.Provider value={darkMode}>
			<DarkModeUpdateContext.Provider value={toggleDarkMode}>
				{children}
			</DarkModeUpdateContext.Provider>
		</DarkModeContext.Provider>
	);
}
