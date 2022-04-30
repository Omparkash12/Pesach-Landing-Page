import React from 'react';
import '../Home/Home.css'
import Navbar1 from '../Shared/Navbar1/Navbar1.js'
import Navbar2 from '../Shared/Navbar2/Navbar2.js'
import Banner from '../banner/Banner.js';
import Instruments from '../Instruments/Instruments.js';
import Slider from '../Slider/Slider.js';
import Graph from '../Graph/Graph.js';
import Card from '../Card/Card.js';
import Dashboard from '../Dashboard/Dashboard.js';
import Drum from '../Drum/Drum.js';
import Warranty from '../Warranty/Warranty.js';
import Footer from '../Shared/Footer/Footer.js';
// import Navbar2 from '../Shared/Navbar2/Navbar2.js'

export default function Home() {
  return (
    <div>
        <Navbar1 link1="NEWSLETTER" link2="SUPPORT" link3="UNITED STATES" link4="MY LYX PRO"/>
        <Navbar2 link5="PRODUCTS" link6="SUPPORT" link7=' WHERE TO BUY'/>
        <Banner/>
        <Instruments/>
        <Slider/>
        <div className='graphSection'>
          <Graph/>
          <Card/>
        </div>
        <Dashboard/>
        <Drum/>
        <Warranty/>
        <Footer/>

    </div>
  )
}


