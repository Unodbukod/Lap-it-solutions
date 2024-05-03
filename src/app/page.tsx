import React from 'react'
import Navbar from './components/navbar'
import Home from './landingpage/Home'
import Features from './landingpage/Features'
import Thirdsection from './landingpage/Thirdsec'
import Fourthsec from './landingpage/Fourthsec'
import Fifthesec from './landingpage/Fifthesec'
import Servicessec from './landingpage/Servicessec'
import Testimonysec from './landingpage/Testimonysec'
import Contact from './landingpage/Contact'
import Footer from './components/constants/Footer'
import { InfiniteMovingCardsDemo } from './landingpage/Clients'




const Page = () => {
  return (
    <div>
      <Navbar/>
      <Home/> 
      <Features/>
      <Thirdsection/>
      <Fourthsec/>
      <Fifthesec/>
      <Servicessec/>   
      <InfiniteMovingCardsDemo/>
      {/* <Testimonysec/>
      <div className='text-green-500 sm:text-red-500 md:text-violet-400 lg:text-blue-600 xl:text-orange-800'>
        responsive
      </div> */}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Page

