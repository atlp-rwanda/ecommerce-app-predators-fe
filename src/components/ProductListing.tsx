/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/action/ProductAction';

export interface Product {
  id: number;
  name: string;
  description: string;
  category_id: number;
  price: string;
  picture_urls: string[];
  instock: number;
  expiryDate: string;
  available: boolean;
  vendor_id: number;
  createdAt: string;
  updatedAt: string;
}

function ProductListing() {
  const products = useSelector(
    (state: { products: { data: Product[] } }) => state.products.data
  );
  const loading = useSelector(
    (state: { products: { loading: boolean } }) => state.products.loading
  );
  const error = useSelector(
    (state: { products: { error: string } }) => state.products.error
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {products?.slice(0, 1).map((product: Product) => (
        <div className="flex" key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.id}</p>
          <p>{product.picture_urls[2]}</p>
        </div>
      ))}
    </>
  );
}

export default ProductListing;
