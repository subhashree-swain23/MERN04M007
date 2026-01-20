import React from 'react'
import {  useNavigate } from 'react-router'

function Home() {
    let navigate= useNavigate()
  return (
    <div className='px-6 py-20 bg-gray-100 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-10'>
            <div className='md:w-1/2 space-y-6'>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>Welcome to <span className='text-red-600'>Food Bazar</span></h1>
                <p>Here you can get your food . search, explore , enjoy........</p>
                <button 
                onClick={() => navigate("/Foods")}
                className='bg-red-600 hover: bg-red-700 text-white px-6 py-3 shadow rounded-lg'>Explore foods</button>
            </div>
            <div className='md:w-1/2'>
                <img src="https://pixabay.com/images/download/mix-grill-7414547_1920.jpg" alt="" className='rounded-lg shadow-md w-900'/>
            </div>
        </div>
    </div>
  )
}

export default Home