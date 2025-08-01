import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'



const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <LatestCollections />
        <BestSeller />
        <OurPolicy />
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Home
