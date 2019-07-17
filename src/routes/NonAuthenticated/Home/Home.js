import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from 'views/ProductSmokingHero';
import AppFooter from 'views/AppFooter';
import ProductHero from 'views/ProductHero';
import ProductValues from 'views/ProductValues';
import ProductHowItWorks from 'views/ProductHowItWorks';
import ProductCTA from 'views/ProductCTA';
import AppAppBar from 'views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCTA />
      <ProductHowItWorks />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
