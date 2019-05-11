import React from 'react';
import './App.css';
import FrontPage from './navigation/front-page/FrontPage';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <FrontPage />
      </div>
    );
  }
}

export default App;
