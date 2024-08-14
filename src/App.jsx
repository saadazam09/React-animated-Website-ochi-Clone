import React from 'react'
import Navbar from './components/navbar'
import LandingPage from "./components/LandingPage"
import  Marquee from "./components/marquee"
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
     <Navbar />
     <LandingPage/> 
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured />

    </div>
  )
}

export default App