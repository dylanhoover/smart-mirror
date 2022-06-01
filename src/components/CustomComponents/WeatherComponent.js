import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';




export default function WeatherComponent(){
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '297bde95ba03dd2c1443c9797becc09b',
        lat: '-37.814',
        lon: '144.96332',
        lang: 'en',
        units: 'metric',
    });
    return(
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Munich"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
        />
    )
}