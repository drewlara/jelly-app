import React from 'react';
import {
  CssBaseline
} from '@material-ui/core';
import Hero from '../Hero';
import InfoContainer from '../InfoContainer';
import FeaturedItem from '../FeaturedItem';


const BaseView = () => {

  return (
    <React.Fragment>
      <CssBaseline />
      <Hero />
      <InfoContainer />
      <FeaturedItem />
    </React.Fragment>
  );
}

export default BaseView;