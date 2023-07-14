
import { Navigation } from '../components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchProducts } from '../redux/action/ProductAction';
import Footer from '../components/Footer';
import WishlistTable from '../components/wishlist/WishlistTable';

interface Product {
  id: number;
  name: string;
  price: string;
  aggregate_rating: undefined;
  picture_urls: string;
}

/* interface ResponseType {
  status: string;
  code: number; 
  message: string;
  data: Product[];
} */
interface ResponseTypeTwo {
  status: string;
  code: number;
  message: string;
  data: {
    products: Product[];
  };
}

const WishlistPage = () => {
  const products = useSelector(
    (state: { products: { data: ResponseTypeTwo } }) => state.products.data
  );


  const dispatch = useDispatch<Dispatch<any>>();
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation/>

      <div className="flex-grow">
        <WishlistTable />
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
