import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ReactWeather, { useWeatherBit } from 'react-open-weather';

// mock data for setting up component
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

const ListItems = (props:any) => {
    const { data, isLoading, errorMessage } = useWeatherBit({
        key: process.env.REACT_APP_WEATHERBIT_KEY,
        lat: props.location ? props.location.lat : 33.7676931,
        lon: props.location ? props.location.lng : -84.4906435,
        lang: 'en',
        unit: 'I', // values are (M,S,I)
      });
    return (
           <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            unitsLabels={{ temperature: 'F', windSpeed: 'Mi/h' }}
            showForecast
            />
    )
}

export default ListItems;