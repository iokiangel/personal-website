import React from 'react';
import image from '../../static/images/LandingPageImage00.JPG';
import './LandingPage.css';

export default function LandingPage(){
    return (
      <div className="landing-page">
        <div className="overlay" />
        <img className="landing-image" src={image} alt="error" />
      </div>
    );
}
