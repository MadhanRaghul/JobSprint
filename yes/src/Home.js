import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Start from './Start'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <Carousel/>
        <Start/>
    </div>
  )
}

export default Home