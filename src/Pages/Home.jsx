import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../src/Pages/css/home.css'
import NavigationBar from '../../components/NavigationBar';
import Slider from '../../components/Slider';
import About from '../../components/about';
import StickyMenu from '../../components/StickyMenu';
import Test from '../../components/Test';
import VMVsection from '../../components/VMVsection';
import AwardsSection from '../../components/AwardsSection';
import DisplayMap from '../../components/DisplayMap';
import Footer from '../../components/Footer';


function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
      <div className="wraper">
        <div className="navigationBar">
          <NavigationBar/>
        </div>
        <div className="sliderSection">
          <Slider/>
        </div>
        
        <div className='about'>
          <About/>
        </div>

        <div className='stickyMenu'>
          <StickyMenu/>
        </div>
        <div className='test'>
          <Test/>
        </div>

        

        <div className="VMVsection">
           <VMVsection/>
        </div>

        <div className="awardSection">
          <AwardsSection/>
        </div>

        <div className="mapSection">
          <DisplayMap/>
        </div>

        <div className="footerSection">
          <Footer/>
        </div>
        
      </div>
    </>
  )
}

export default Home