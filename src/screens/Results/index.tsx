import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ListItems from '../../components/ListItems/ListItems'
import Mapview from './Mapview'

export const Results = (props: any) => {
    return (
        <Row>
            <Col sm={8} >
                <Card>
                    <Card.Body> <Mapview location={props.location} /> </Card.Body>
                </Card>
            </Col>
            <Col sm={4} >
                <Card>
                    <Card.Body>
                        <ListItems location={props.location} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
