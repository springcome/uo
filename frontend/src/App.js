import React from "react";
import "bootswatch/dist/flatly/bootstrap.css";

import Header from "./layout/header";

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div class="container-fluid">
				<Header />
			</div>
		);
	}
}

export default App;
