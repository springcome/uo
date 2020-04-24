import React from "react";
import {Container, Row, Col} from "react-grid-system";

import Header from "./layout/header";

class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Container>
				<Row>
					<Col debug>
						<Header />
					</Col>
				</Row>
				<Row>
					<Col debug md={3}>Left</Col>
					<Col debug>Content</Col>
				</Row>
				<Row>
					<Col debug>Footer</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
