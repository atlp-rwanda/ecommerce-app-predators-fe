/* eslint-disable @typescript-eslint/no-explicit-any */
import NavHeader from '../components/buyerHeader/HeaderNav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { fetchProducts } from '../redux/action/ProductAction';
import { searchProductsByFilter } from '../redux/action/SearchAction';
import Sidebar from '../components/userSidebar/Sidebar';
import { Card } from './../components/cardComponent/Card';
import React from 'react';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import ViewProduct from './viewProduct';

interface Product {
  id: number;
  name: string;
  price: string;
  aggregate_rating: undefined;
  picture_urls: string[];
}
interface SearchCriteria {
  name?: string;
  price?: string;
  keyword?: string;
}

interface ResponseType {
  status: string;
  code: number;
  message: string;
  data: Product[];
}
interface ResponseTypeTwo {
  status: string;
  code: number;
  message: string;
  data: {
    products: Product[];
  };
}
function SearchProductPage() {
  const products = useSelector(
    (state: { products: { data: ResponseTypeTwo } }) => state.products.data
  );
  const searchProduct = useSelector(
    (state: { search: { products: ResponseType } }) => state.search.products
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
      const searchCriteria: SearchCriteria = {
        name: '',
        price: '',
        keyword: '',
      };

      if (!isNaN(parseFloat(searchText))) {
        searchCriteria.price = searchTerm;
      } else if (!searchCriteria.name) {
        searchCriteria.keyword = searchTerm.slice(1, -1);
      } else {
        searchCriteria.name = searchTerm;
      }
      dispatch(searchProductsByFilter(searchCriteria));
    } else {
      dispatch(fetchProducts());
    }
  };
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
            <div className="flex gap-5 justify-evenly flex-wrap mt-8 mx-20">
              {filteredProducts.map((product: Product) => (
               <Link  to={`/viewProduct/${product.id}`} key={product.id}>
                <Card
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  picture_urls={product.picture_urls}
                  id={product.id}
                  rating={undefined}
                />
                </Link>
              ))}
              <Routes>
               <Route path="/viewProduct/:id" element={<ViewProduct />} />
               </Routes>
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
