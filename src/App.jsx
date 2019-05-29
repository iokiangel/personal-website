import React from "react";
import "./App.css";
import LandingPage from "./navigation/landing-page/LandingPage";
import NavigationBar from "./navigation/NavigationBar";
import Resume from './navigation/dashboards/resume/Resume';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <LandingPage />
        <Resume />
      </div>
    );
  }
}

export default App;
