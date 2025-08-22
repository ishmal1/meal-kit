import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import DessertsSection from './DessertsSection'

function HomeLeft() {
  return (
    <div className='w-full'>
      <nav>

      <Navbar />
      </nav>
      <main className='w-full '>

      <HeroSection />
      <DessertsSection/>
      </main>
    </div>
  )
}

export default HomeLeft
