export default function HoverList({ list }) {
	return (
		<ul>
			{list.map((li) => (
				<img alt={li.altText} src={li.imgSrc} className="hoverAndSwirl" />
			))}
		</ul>
	);
}
