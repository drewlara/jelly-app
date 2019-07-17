import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../../routes';
import NavBar from '../NavBar';
import Footer from '../Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{ minHeight: '100vh', position: 'relative' }}>
          <NavBar />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;