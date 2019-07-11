import React from 'react';
import {
  CssBaseline
} from '@material-ui/core';
import NavBar from '../NavBar';
import Hero from '../Hero';
import Footer from '../Footer';
import InfoContainer from '../InfoContainer';
import FeaturedItem from '../FeaturedItem';


const BaseView = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Hero />
      <InfoContainer />
      <Footer />
      <FeaturedItem />
    </React.Fragment>
  );
}

export default BaseView;