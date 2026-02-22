import { useState } from "react"
import React from 'react'


const SearchBar = () => {
    const [city, setCity] = useState("")
  return (
    <form className="flex mt-1">
        <input className='p-2 border border-gray-300 outline-none flex-1 rounded-l-lg border-r-0'
        type="text" placeholder='city'
        value={city}
        onChange={(e)=>setCity(e.target.value) } />
        <button className='bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 border-l-0 rounded-r-lg'type='submit'>
            Search
        </button>
    </form>
  )
}

export default SearchBar