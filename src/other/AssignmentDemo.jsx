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

	useEffect(() => {
		abDestructure();
		abRestDestructure();
		abObjectDestructure();
		abObjectDestructureVarNames();
	}, []);

	return (
		<>
			<h1>Assignment Demo</h1>
			<h2>Destructuring</h2>
			<code className="m-4">const [a, b] = [2, 4];</code>
			<p className="m-4">Result will be a = 2, b = 4.</p>
			<code className="m-4">
				const [a, b, ...rest] = [2, 4, 8, 16, 32, 64];
			</code>
			<p className="m-4">
				Result will be a = 2, b = 4, rest = [8, 16, 32, 64].
			</p>
			<code className="m-4">
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
			<p className="p-4">Result will be age = 2, name = Lalo</p>
			<code>
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
			<p>Result will be foo = 2, bar = Lalo</p>
			<h2>Spread</h2>
		</>
	);
}
