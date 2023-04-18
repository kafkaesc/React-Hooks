/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

export default function AssignmentDemo() {
	function abDestructure() {
		const [a, b] = [2, 4];
		console.log('a: ' + a + '; b: ' + b);
	}

	function abRestDestructure() {
		const [a, b, ...rest] = [2, 4, 8, 16, 32, 64];
		console.log('a: ' + a + '; b: ' + b + '; rest: ', rest);
	}

	function abObjectDestructure() {
		const obj = {
			age: 2,
			name: 'Lalo',
			species: 'cat',
			other: { fullName: 'Eduardo', isVaccinated: true },
		};
		const { age, name } = obj;
		console.log('age: ' + age + '; name: ' + name + ';');
	}

	function abObjectDestructureVarNames() {
		const obj = {
			age: 2,
			name: 'Lalo',
			species: 'cat',
			other: { fullName: 'Eduardo', isVaccinated: true },
		};
		const { age: foo, name: bar } = obj;
		console.log('foo: ' + foo + '; bar: ' + bar + ';');
	}

	function xyzArraySpread() {
		let abc = [10, 20, 30];
		let xyz = [0, 0, 0];
		xyz = [...abc];
		console.log('xyz: ', xyz);
	}

	function xyzArraySpread2() {
		let abc = [10, 20, 30];
		let xyz = [0, 0, 0];
		xyz = [...xyz, ...abc];
		console.log('xyz: ', xyz);
	}

	function xyzObjSpread() {
		let abc = { a: 10, b: 20, c: 30 };
		let xyz = { x: 80, y: 90, z: 100 };
		xyz = { ...abc };
		console.log('xyz: ', xyz);
	}

	function argObjSpread() {
		const arg1 = 'mode';
		const arg2 = ['d', 'a', 't', 'a'];
		const args345 = { hidden: true, count: 3, config: {} };
		const props = { arg1, arg2, ...args345 };
		console.log('props: ', props);
	}

	useEffect(() => {
		//abDestructure();
		//abRestDestructure();
		//abObjectDestructure();
		//abObjectDestructureVarNames();
		//xyzArraySpread();
		//xyzArraySpread2();
		//xyzObjSpread();
		//argObjSpread();
	}, []);

	return (
		<>
			<h1>Assignment Demo</h1>
			<h2>Spread</h2>
			<code className="block">
				let abc = [10, 20, 30];
				<br />
				let xyz = [0, 0, 0];
				<br />
				xyz = [...abc];
			</code>
			<p className="m-4">Result will be xyz = [10, 20, 30]</p>
			<code className="block">
				let abc = [10, 20, 30];
				<br />
				let xyz = [0, 0, 0];
				<br />
				xyz = [...xyz, ...abc];
			</code>
			<p className="m-4">Result will be xyz = [0, 0, 0, 10, 20, 30]</p>
			<code className="block">
				let abc = &#123; a: 10, b: 20, c: 30 &#125;;
				<br />
				let xyz = &#123; x: 80, y: 90, z: 100 &#125;;
				<br />
				xyz = &#123; ...abc &#125;;
			</code>
			<p className="m-4">
				Result will be xyz = &#123; 0, 0, 0, 10, 20, 30 &#125;
			</p>
			<code className="block">
				const arg1 = 'mode';
				<br />
				const arg2 = ['d', 'a', 't', 'a'];
				<br />
				const args345 = &#123; hidden: true, count: 3, config: &#123;&#125;
				&#125;;
				<br />
				const props = &#123; arg1, arg2, ...args345 &#125;;
			</code>
			<p className="m-4">
				Result will be props = &#123; arg1: 'mode', arg2: ['d', 'a', 't', 'a'],
				config; 'mode', count: 3, hidden: true &#125;
			</p>
			<h2>Destructuring</h2>
			<code className="block">const [a, b] = [2, 4];</code>
			<p className="m-4">Result will be a = 2, b = 4.</p>
			<code className="block">
				const [a, b, ...rest] = [2, 4, 8, 16, 32, 64];
			</code>
			<p className="m-4">
				Result will be a = 2, b = 4, rest = [8, 16, 32, 64].
			</p>
			<code className="block">
				const obj = &#123;
				<br />
				&nbsp;&nbsp;age: 2,
				<br />
				&nbsp;&nbsp;name: 'Lalo',
				<br />
				&nbsp;&nbsp;species: 'cat',
				<br />
				&nbsp;&nbsp;other: &#123; fullName: 'Eduardo', isVaccinated: true
				&#125;,
				<br />
				&#125;;
				<br />
				const &#123; age, name &#125; = obj;
			</code>
			<p className="m-4">Result will be age = 2, name = Lalo</p>
			<code className="block">
				const obj = &#123;
				<br />
				&nbsp;&nbsp;age: 2,
				<br />
				&nbsp;&nbsp;name: 'Lalo',
				<br />
				&nbsp;&nbsp;species: 'cat',
				<br />
				&nbsp;&nbsp;other: &#123; fullName: 'Eduardo', isVaccinated: true
				&#125;,
				<br />
				&#125;;
				<br />
				const &#123; age: foo, name: bar &#125; = obj;
			</code>
			<p className="m-4">Result will be foo = 2, bar = Lalo</p>
		</>
	);
}
