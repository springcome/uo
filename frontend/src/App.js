import React from 'react';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 0
		}
	}

	add() {
		console.log("1");
		this.state.count++;
	}

	minus() {
		console.log("2");
		this.state.count--;
	}

	render() {
		return (
			<div>
				<h1>The number is {this.state.count}</h1>
				<button onClick="add">Add</button>
				<button onClick="minus">Minus</button>
			</div>
		);
	}
}

export default App;
