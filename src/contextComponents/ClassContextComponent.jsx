import React, { Component } from 'react';
import { ThemeContext } from '../hooks/UseContextWithClassAndFunctionDemo';

export default class ClassContextComponent extends Component {
	themeStyles(dark) {
		return {
			backgroundColor: dark ? '#222' : '#eee',
			border: 'solid 1px #222',
			color: dark ? '#eee' : '#222',
			margin: '1rem 2rem',
			padding: '2rem',
		};
	}

	render() {
		return (
			<ThemeContext.Consumer>
				{(darkMode) => {
					return <div style={this.themeStyles(darkMode)}>Class Context</div>;
				}}
			</ThemeContext.Consumer>
		);
	}
}
