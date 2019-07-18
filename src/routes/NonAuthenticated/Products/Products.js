import withRoot from 'hoc/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from 'views/ProductCategories';

function Index() {
  return (
    <React.Fragment>
      <ProductCategories />
    </React.Fragment>
  );
}

export default withRoot(Index);