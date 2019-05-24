import React from "react";
import "./App.css";
import LandingPage from "./navigation/landing-page/LandingPage";
import NavigationBar from "./navigation/NavigationBar";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
