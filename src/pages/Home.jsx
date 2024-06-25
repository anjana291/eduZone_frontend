import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Info from '../components/Info'
import PopCourses from '../components/PopCourses'
import Testimonials from '../components/Testimonials'

function Home() {
  return (
    <>
    <div>
        <Header/>
        <div className='w-100' style={{minHeight:'100vh'}}>
          <About/>
          <Info/>
          <PopCourses/>
          <Testimonials/>
        </div>
        <Footer/>
    </div>
    </>
  )
}

export default Home