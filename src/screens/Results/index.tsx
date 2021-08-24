import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListItems from '../../components/ListItems/ListItems'

export const Results = () => {
    return (
        <Row>
            <Col sm={8} >
                <Card>
                    <Card.Body>The Map will go here...</Card.Body>
                </Card>
            </Col>
            <Col sm={4} >
                <Card>
                    <Card.Body>
                        <ListItems />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
