import NavHeader from '../components/buyerHeader/HeaderNav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchProducts } from '../redux/action/ProductAction';
import { searchProducts } from '../redux/action/SearchAction';
import Sidebar from '../components/userSidebar/Sidebar';
import { Card } from './../components/cardComponent/Card';
import React from 'react';

interface Product {
  id: any;
  name: any;
  price: any;
  picture_urls: any;
}

function SearchProductPage() {
  const products = useSelector(
    (state: { products: { data: any } }) => state.products.data
  );
  const searchProduct = useSelector(
    (state: { search: { products: any } }) => state.search.products
  );
  const loading = useSelector(
    (state: { products: { loading: any } }) => state.products.loading
  );
  const error = useSelector(
    (state: { products: { error: any } }) => state.products.error
  );
  const dispatch = useDispatch<Dispatch<any>>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [searchText, setSearchText] = React.useState('');
  const [isSearchPerformed, setIsSearchPerformed] = React.useState(false);

  const handleSearchText = (searchTerm: string) => {
    setSearchText(searchTerm);
    setIsSearchPerformed(!!searchTerm);
    if (searchTerm) {
      dispatch(searchProducts(searchText));
    } else {
      dispatch(fetchProducts());
    }
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredProducts = isSearchPerformed
    ? searchProduct?.data || []
    : products?.data?.products || [];

  return (
    <div className="font-Poppins">
      <NavHeader onSearchText={handleSearchText} />
      <div className="grid grid-cols-7 container ">
        <div className="col-span-1 ml-2 mt-5">
          <div className="flex justify-between">
            <div className="text-primary font-semibold">Categories</div>
            <div className="text-gray-500">Reset</div>
          </div>
          <Sidebar />
        </div>
        <div className="col-span-6 ml-6 mt-44">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-3 gap-3 mt-8 mx-20">
              {filteredProducts.map((product: Product) => (
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  picture_urls={product.picture_urls}
                  id={product.id}
                  rating={undefined}
                />
              ))}
            </div>
          ) : (
            <p className="text-tertiary text-3xl font-Poppins text-center mt-10">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchProductPage;
