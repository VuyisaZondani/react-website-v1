import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';



function MainSection() {
  return (
    <div className='hero-container'>
        {/* <video src='/video/video-2.mp4' autoPlay loop muted /> */}
        <h1>READING PLEASURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button
                className = 'btns'
                buttonStyle= 'btn--outline'
                buttonSize='btn--large'
            >
            GET STARTED    
           </Button>
        </div> 
    </div>
  )
}

export default MainSection;
