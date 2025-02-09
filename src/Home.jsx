import React, { useState } from 'react'
import App from './App'
function Home() {
    const [isHome , setIsHome] = useState(true);

    function handleChange() {
        setIsHome(false);
    }
  return (
    <>
      {isHome ? 
      (
        <>
        <div className='border text-center m-2 p-1 rounded-3xl'>
        <h1 className='md:text-7xl text-3xl mb-5'>Welcome to JavaScript</h1>
        <p className='md:text-4xl text-xl'>Here you will go through JavaScript concepts</p>
        <p className='md:text-4xl text-xl'>begin with clicking on below button</p>
        <button className=' mt-10 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700' onClick={handleChange} >Let Start</button>
        </div>
        </>
      )

        :
        <>
        
            <App></App>
        
        </>
    }
    </>
  )
}

export default Home
