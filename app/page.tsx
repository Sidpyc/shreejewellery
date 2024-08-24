import React from 'react'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Aboutus from './components/Aboutus'
import Jewelry from './components/Jewelry'
import Contactus from './components/Contactus'
import Location from './components/Location'
import Craftmanship from './components/Craftmanship'
import Footer from './components/Footer'
import Carouseltwo from './components/Carouseltwo'
import Carouselthree from './components/Carouselthree'

const page = () => {
  return (
    <>
      <Navbar />
      <Carousel/>
      <Aboutus />
      {/* <Jewelry /> */}
      <Carouselthree/>
      {/* <Craftmanship /> */}
      <Carouseltwo/>
      <Contactus />
      <Location />
      <Footer/>
    
    </>
  )
}

export default page