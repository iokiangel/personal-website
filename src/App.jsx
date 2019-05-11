import React from 'react';
import './App.css';
import LandingPage from './navigation/front-page/LandingPage';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
