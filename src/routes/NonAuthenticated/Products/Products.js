import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from 'views/ProductCategories'
import AppFooter from 'views/AppFooter';
import AppAppBar from 'views/AppAppBar';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductCategories />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);