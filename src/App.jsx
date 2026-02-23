import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

const App = () => {

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const API_KEY = import.meta.env.VITE_API_KEY
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async(city)=>{

    setLoading(true)
    setError(null)
    try{
      const url =`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`
      
      const response = await axios.get(url)
      console.log(response.data)
      setWeather(response.data)

    }
    catch(err){
      if(err.response && err.response.status === 404){
        setError("City not found.Please try again")
      }
      else{
        setError("An Error occured,Please try again")
      }
    setWeather(null)
    }
    finally{
      setLoading(false)
    }

  }

  return (
    <div className='min-h-screen bg-blue-100 flex flex-col justify-center items-center'>
      <div className='bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full '>
        <h1 className='text-center text-3xl font-bold mb-2'>Weather app</h1>
        <SearchBar fetchWeather={fetchWeather}></SearchBar>
        {loading&&<p className='text-center mt-1.5'>Loading...</p>}
        {error&&<p className='text-center text-red-500 mt-3'>{error}</p> }
        {weather&&<WeatherCard weather={weather}/>}
      </div>
    </div>
  )
}

export default App