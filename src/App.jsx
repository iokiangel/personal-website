import React from "react";
import "./App.css";
import LandingPage from "./navigation/landing-page/LandingPage";
import NavigationBar from "./navigation/NavigationBar";
import Resume from './navigation/dashboards/resume/Resume';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 'Home'
    }

    this.setPage = this.setPage.bind(this);
  }
  setPage(newPage) {
    this.setState({
      activePage: newPage
    });
  }
  render() {
    return (
      <div className="App">
        <NavigationBar activePage={this.state.activePage} setPage={this.setPage} />
        <LandingPage />
        {this.state.activePage === 'Resume' && <Resume />}
      </div>
    );
  }
}

export default App;
