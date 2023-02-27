import { AcountActivation } from '@/components/AcountActivation'
import Footer from '@/components/Footer/Footer'
import InfoHome from '@/components/InfoHome/InfoHome'
import Search from '@/components/Search/Search'
import SlideShow from '@/components/SlideShow/SlideShow'
import React from 'react'

 const confirm = () => {
  return (
    <>
        <AcountActivation></AcountActivation> 
        <SlideShow />
        <InfoHome />
        <Search />
        <Footer />
    </>
  )
}

export default confirm
