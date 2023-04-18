import React from 'react';
import FunctionContextComponent2 from '../contextComponents/FunctionContextComponent2';
import { DarkModeProvider } from '../contextComponents/DarkModeContext';

export const DarkModeContext = React.createContext();

export default function UseContextWithHookDemo() {
	return (
		<DarkModeProvider>
			<FunctionContextComponent2 />
		</DarkModeProvider>
	);
}
