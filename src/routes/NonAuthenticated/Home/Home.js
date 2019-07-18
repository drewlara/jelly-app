import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductSmokingHero from 'views/ProductSmokingHero';
import ProductHero from 'views/ProductHero';
import ProductValues from 'views/ProductValues';
import ProductHowItWorks from 'views/ProductHowItWorks';
import ProductCTA from 'views/ProductCTA';

function Index() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductCTA />
      <ProductHowItWorks />
      <ProductSmokingHero />
    </React.Fragment>
  );
}

export default withRoot(Index);
