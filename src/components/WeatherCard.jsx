import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className='mt-6'>
        <h2 className='text-semibold text-2xl text-center'>{weather.name},{weather.sys.country}</h2>
        <div className='flex  justify-center items-center'>
            <img className='w-16 h-16'
             src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description}>
            </img>
            <p className='text-4xl font-bold '>{Math.round(weather.main.temp)}°C</p>
        </div>
        <p className='text-center text-grey-400 capitalize mt-0.5'>
            {weather.weather[0].description}
        </p>
        <div className='grid grid-cols-2 gap-4 mt-6'>
            <div className='text-center'>
                <p className='text-gray-400'>Humidity</p>
                <p>{weather.main.humidity}%</p>
            </div>
            <div className='text-center'>
                <p className='text-gray-400'>Pressure</p>
                <p>{weather.main.pressure} hPa</p>
            </div>
            <div className='text-center' >
                <p className='text-gray-400'>Wind</p>
                <p>{weather.wind.speed} m/s</p>
            </div>
            <div className='text-center'>
                <p className='text-gray-400'>Feels like</p>
                <p>{Math.round(weather.main.feels_like)} °C</p>
            </div>
            
        </div>
    </div>
  )
}

export default WeatherCard