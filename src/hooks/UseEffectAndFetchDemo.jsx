import { useEffect, useState } from 'react';

export default function UseEffectDemo() {
	const [items, setItems] = useState([]);
	const [resourceType, setResourceType] = useState('posts');

	useEffect(() => {
		console.log('resourceType changed');
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((res) => res.json())
			.then((json) => setItems(json));
	}, [resourceType]);

	useEffect(() => {
		console.log('on mount');
	}, []);

	return (
		<>
			<div>
				<button onClick={() => setResourceType('comments')}>Comments</button>
				<button onClick={() => setResourceType('posts')}>Posts</button>
				<button onClick={() => setResourceType('users')}>Users</button>
			</div>
			<h1>{resourceType}</h1>
			<div
				style={{
					border: 'solid 1px #000',
					margin: '4px',
					maxHeight: '400px',
					overflowY: 'scroll',
				}}
			>
				{items.map((it) => {
					return <pre key={it.id}>{JSON.stringify(it)}</pre>;
				})}
			</div>
		</>
	);
}
