import React from 'react'
import Layout from '../../Components/Layout/Layout'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Services from '../../Components/Services/Services'
import Gallery from '../../Components/Gallery/Gallery'

const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <Services/>
      <Gallery/>
    </Layout>
  )
}

export default Home
