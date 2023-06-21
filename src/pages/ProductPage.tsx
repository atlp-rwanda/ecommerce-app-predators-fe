// import React from 'react'

//import { useSelector } from "react-redux";
import NotDashboardFooter from '../components/NotDashboardFooter';
import NavHeader from '../components/HeaderNav';

import ProductListing from '../components/ProductListing';

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
