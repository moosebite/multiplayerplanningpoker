import React from 'react'

import '../Styles/FibButtons.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Button, Container, Row, Col } from 'react-bootstrap'

class FibButtons extends React.Component {
    numbers = [0,1,2,3,5,8,13,21,'?']

    handleShowValue = (event) => {
        this.props.dataService.updateVote(event);
        console.log("Value is:",event, '.');
    }

    render() {
            const rowButtons = this.numbers.map((number) => {
                return (
                    <Col xs={6} sm={3} md={2} lg={1}>
                        <Button className='fibButton' variant="outline-primary" onClick={(event) => this.handleShowValue(number)}>{number}
                        </Button>
                    </Col>
                )
            });
            return (
                <Container className='Container1'>
                    <Row className='Row1'>
                        {rowButtons}
                    </Row>
                </Container>
            )
    }
}

export default FibButtons