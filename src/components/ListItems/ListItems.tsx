import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const weatherData: any = [
    {
        day: 'Monday',
        condition: 'Partly Sunny',
        high: '90F degrees',
        low: '70F degrees',
        id: 1
    },
    {
        day: 'Tuesday',
        condition: 'Partly Sunny',
        high: '90F degrees',
        low: '70F degrees',
        id: 2
    },
    {
        day: 'Wednesday',
        condition: 'Partly Sunny',
        high: '90F degrees',
        low: '70F degrees',
        id: 2
    },
]

const ListItems = () => {
    return (
        <ListGroup>
            {weatherData && (weatherData.map((temp:any) => (<ListGroup.Item key={temp.id} > <strong>{temp.day}:</strong> <br/> {temp.condition} <br/> high: {temp.high} <br/> low: {temp.low} </ListGroup.Item>)))}
            {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
        </ListGroup>
    )
}

export default ListItems;