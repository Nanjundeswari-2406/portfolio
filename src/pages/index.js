import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

const index = () => {
  return (
    <>
    <div className="space-y-32 ">
        <Navbar />
        <section id="Home">
  <div className=" md:h-20"></div> 
  <Home />
</section>
<section id="About">
  <div className=" md:h-20"></div>
  <About />
</section>
<section id="Project">
  <div className=" md:h-20"></div>
  <Project />
</section>
<section id="Contact">
  <div className=" md:h-20"></div>
  <Contact />
</section>

    
</div>
   
    

    
    </>
  )
}

export default index