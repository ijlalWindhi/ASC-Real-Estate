import React from 'react'
import Navbar from './components/navbar'
import Hero from './pages/hero'
import About from './pages/about'
import Property from './pages/property'
import Article from './pages/article'
import Contact from './pages/contacts'
import Footer from './components/footer'
import {Box} from '@chakra-ui/react'

export default function App() {
  return (
    <Box w={"full"} minH={"100vh"}>
      <Navbar />
      <Hero />
      <About />
      <Property />
      <Article />
      <Contact />
      <Footer />
    </Box>
  )
}