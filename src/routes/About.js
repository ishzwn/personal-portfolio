import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg3 from "../components/HeroImg3";

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg3 heading="ABOUT" text="I'm a..."/>
      <Footer/>
    </div>
  )
};

export default About