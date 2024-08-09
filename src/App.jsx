import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import NavigationBar from '../components/NavigationBar';
import Slider from '../components/Slider';
import Test from '../components/test';
import About from '../components/about';
import Map from '../components/DisplayMap'
import VMV from '../components/VMVsection'
import Footer from '../components/Footer';
import StickyMenu from '../components/StickyMenu';
import AwardsSection from '../components/AwardsSection';
// import Ringtest from '../components/Ringtest';
import Store from '../components/OtherInformation';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="wraper">
        <div className="navigationBar">
          <NavigationBar />
        </div>
        <div className="sliderSection">
          <Slider />
        </div>
        
        <div className='about'>
          <About />
        </div>

        <div className='stickyMenu'>
          <StickyMenu/>
        </div>
        <div className='test'>
          <Test />
        </div>

        <div className="mapSection">
          <Map/>
        </div>

        {/* <div className="VMVsection">
           <VMV/>
        </div>

        <div className="awardSection">
          <AwardsSection/>
        </div> */}
        {/* <div className="ringtest">
          <Ringtest/>
        </div> */}
        <div className="store">
                <Store/>
        </div>
        
      </div>

    </>


  );
}

export default App;
