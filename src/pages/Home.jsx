import React from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services' 

const Home = () => {
  return (
    <div className='flex flex-col h-auto'>
      <Hero />
      <WhyChooseUs />
      <Services />
    </div>
  )
}

export default Home