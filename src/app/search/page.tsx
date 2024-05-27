import React from 'react'
import Navbar from '@/components/Search/Navbar'
import Image from 'next/image'
import CarouselComp from '@/components/Search/Carousel'
import Ads from '@/components/Search/Ads'

export default function page() {
  return (
    <div className=''>
        <Navbar/>
     <CarouselComp/>
     <Ads/>
    </div>
  )
}
