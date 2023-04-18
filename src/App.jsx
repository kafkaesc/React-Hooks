import { useState } from 'react';
import './App.css';

import UseContextWithClassAndFunctionDemo from './hooks/UseContextWithClassAndFunctionDemo';
import UseContextWithHookDemo from './hooks/UseContextWithHookDemo';
import UseEffectAndEventListenerDemo from './hooks/UseEffectAndEventListenerDemo';
import UseEffectAndFetchDemo from './hooks/UseEffectAndFetchDemo';
import UseMemoDemo from './hooks/UseMemoDemo';
import UseRefDemo from './hooks/UseRefDemo';
import UseStateDemo from './hooks/UseStateDemo';

import AssignmentDemo from './other/AssignmentDemo';
import PromiseDemo from './other/PromiseDemo';

const demos = [
	{ id: 0, key: 'useContext1', label: 'useContext 1' },
	{ id: 1, key: 'useContext2', label: 'useContext 2' },
	{ id: 2, key: 'useEffect1', label: 'useEffect 1' },
	{ id: 3, key: 'useEffect2', label: 'useEffect 2' },
	{ id: 4, key: 'useMemo', label: 'useMemo' },
	{ id: 5, key: 'useRef', label: 'useRef' },
	{ id: 6, key: 'useState', label: 'useState' },
	{ id: 7, key: 'assignment', label: 'Assignments' },
	//{ id: 8, key: 'promise', label: 'Promises' },
];

function App() {
	const [activeDemo, setActiveDemo] = useState('useContext1');
	return (
		<div className="main">
			<h1>React Hooks and Other Demos</h1>
			{demos.map((de) => (
				<button key={de.id} onClick={() => setActiveDemo(de.key)} type="button">
					{de.label}
				</button>
			))}
			<hr />
			{activeDemo === 'useContext1' && <UseContextWithClassAndFunctionDemo />}
			{activeDemo === 'useContext2' && <UseContextWithHookDemo />}
			{activeDemo === 'useEffect1' && <UseEffectAndEventListenerDemo />}
			{activeDemo === 'useEffect2' && <UseEffectAndFetchDemo />}
			{activeDemo === 'useMemo' && <UseMemoDemo />}
			{activeDemo === 'useRef' && <UseRefDemo />}
			{activeDemo === 'useState' && <UseStateDemo />}
			{activeDemo === 'assignment' && <AssignmentDemo />}
			{activeDemo === 'promise' && <PromiseDemo />}
		</div>
	);
}

export default App;
