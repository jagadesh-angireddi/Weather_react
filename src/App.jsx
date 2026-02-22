
import SearchBar from './components/SearchBar'

const App = () => {

  


  return (
    <div className='min-h-screen bg-blue-100 flex flex-col justify-center items-center'>
      <div className='bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full '>
        <h1 className='text-center text-3xl font-bold mb-2'>Weather app</h1>
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}

export default App