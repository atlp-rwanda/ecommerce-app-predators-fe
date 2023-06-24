/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/action/ProductAction';
import AddToCart from '../pages/AddToCart';
import NotDashboardFooter from '../components/NotDashboardFooter';
import NavHeader from '../components/Buyer/HeaderNav';
import StaticReview from '../components/StaticReview';

function ViewProduct() {
  const { id } = useParams(); // Get the product ID from the URL params
  const selectedProduct = useSelector(
    (state: any) => state.CollectionProducts.selectedProduct
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id) as any); // Dispatch the fetchProductById action with the product ID
  }, [dispatch, id]);

  if (!selectedProduct) {
    return <p>Product loading....</p>;
  }

  return (
    <>
      <NavHeader onSearchText={function (_text: string): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div  className=''>
        <div className="flex justify-center ">
          <h2>{selectedProduct?.data?.item?.name}</h2>
        </div>
        <div className=" mt-60 ml-80 w-80 border-2 rounded-l-sm h-40">
          {/* <p>{selectedProduct?.data?.item?.description}</p>  */}
          <img src={selectedProduct?.data?.item?.picture_urls} alt="img" />
        </div>
      </div>

      {/* Other product details */}

      <AddToCart />
    
      <StaticReview src={selectedProduct?.data?.item?.picture_urls} />
      
      <NotDashboardFooter />
     
    </>
  );
}

export default ViewProduct;
