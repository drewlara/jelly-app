import React from 'react';
import {
  CssBaseline
} from '@material-ui/core';
import NavBar from '../NavBar';
import Hero from '../Hero';
import Footer from '../Footer';


const BaseView = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}

export default BaseView;