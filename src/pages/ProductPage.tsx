// import React from 'react'

import NavHeader from '../components/HeaderNav';
import ProductListing from '../components/ProductListing';
//import AddToCart from "./AddToCart"
import NotDashboardFooter from '../components/NotDashboardFooter';
function productPage() {
  return (
    <>
      <NavHeader />
      <ProductListing />
      <NotDashboardFooter />
    </>
  );
}

export default productPage;
