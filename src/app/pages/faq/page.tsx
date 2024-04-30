import NavBar from '@/app/components/navbar'
import React from 'react'
import Firstsec from './components/firstsec'
import Faq2 from './components/Faq2'
import Footer from '@/app/components/constants/Footer'


const Page = () => {
  return (
    <div>
      <NavBar/>
      <Firstsec/>
      <Faq2/>
      <Footer />
    </div>
  )
}

export default Page