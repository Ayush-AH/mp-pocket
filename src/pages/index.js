import About from '@/components/home/About'
import Banner from '@/components/home/Banner'
import Featured from '@/components/home/Featured'
import HeroSection from '@/components/home/HeroSection'
import Questions from '@/components/home/Questions'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Featured />
      <Questions />
      <Banner />
    </>
  )
}

export default Home