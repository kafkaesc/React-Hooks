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

function App() {
	const activeDemo = 'assignment';
	return (
		<div className="main">
			<h1>React Hooks and Other Demos</h1>
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
