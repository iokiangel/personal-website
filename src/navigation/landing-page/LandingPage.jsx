import React from 'react';
import image from '../../static/images/LandingPageImage00.JPG';
import './LandingPage.css';

class LandingPage extends React.PureComponent {
  render() {
    return (
      <div className="landing-page">
        <div className="overlay" />
        <img className="landing-image" src={image} alt="error" />
      </div>
    );
  }
}

export default LandingPage;
