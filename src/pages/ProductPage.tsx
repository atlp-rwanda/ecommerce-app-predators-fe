// import React from 'react'

import Footer from "../components/Footer"
import NavHeader from "../components/HeaderNav"
import ProductListing from "../components/ProductListing"
//import AddToCart from "./AddToCart"

function productPage() {
  return (
    <>
    <NavHeader />
    <ProductListing/>
    {/* <AddToCart/> */}
    <Footer />
     </>
  )
}

export default productPage