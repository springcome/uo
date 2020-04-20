import React from "react";
import { Container, Row, Col } from "react-grid-system";

class GridSystem extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col debug sm={4}>aa</Col>
                    <Col debug>bb</Col>
                </Row>
            </Container>
        );
    }
}

export default GridSystem;