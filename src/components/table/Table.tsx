import { useState, useEffect } from 'react';
import { fetchProductsCollection } from '../../redux/action/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../redux/reducers/productReducer';

export default function Table() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const product = useSelector(
    (state: { CollectionProducts: { data: Product } }) =>
      state.CollectionProducts.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCollection()as any);
  }, [dispatch]);

  const handleVisibilityClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseClick = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative mt-10 mb-6 shadow-lg w-[90%] ">
      <p className="font-medium mb-2 inline-block">Recent Products</p>
      <div className='flex'>
      <div className="w-full pb-2 overflow-x-auto flex">
        <table className="font-light w-full table-fixed">
          <thead className="bg-blue-200">
            <tr>
              <th className="w-32 text-start font-light px-6 py-1 border">
                Name
              </th>
              <th className="w-32 text-start font-light px-6 py-1 border">
                #Id
              </th>
              <th className="w-32 text-start font-light px-6 py-1 border">
                Products
              </th>
              <th className="w-32 text-start font-light px-6 py-1 border">
                Category
              </th>
              <th className="w-32 text-start font-light px-6 py-1 border">
                Description
              </th>
              <th className="w-32 text-start font-light px-6 py-1">Amount</th>
              <th className="w-32 text-start font-light px-6 py-1">Date</th>
              <th className="w-32 text-start font-light px-6 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {product?.data &&
              product.data.map((product: Product) => (
                <tr className="" key={product.id}>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.name.slice(0, 10)}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.id}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.name.slice(0, 10)}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.category_id}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.description.slice(0, 10)}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.price}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    {product.expiryDate.slice(0, 10)}
                  </td>
                  <td className="w-32 text-start px-6 py-1 border">
                    <div className="symbols flex justify-between">
                      <i
                        className="material-symbols-rounded text-blue-500 cursor-pointer"
                        onClick={() => handleVisibilityClick(product)}
                      >
                        {' '}
                        visibility
                      </i>
                      <i className="update material-symbols-rounded text-orange-500 ">
                        edit
                      </i>
                      <i className="material-symbols-rounded text-red-500 ">
                        delete
                      </i>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {selectedProduct && (
        <div className="popup p-5 cursor-pointer bg-slate-50">
          <img
            src={selectedProduct.picture_urls[0]}
            alt={selectedProduct.picture_urls[0]}
          />
          <div className='p-5'>
          <h2>Name: {selectedProduct.name}</h2>
          <p>Description: {selectedProduct.description}</p>
          <p>Price: {selectedProduct.price}</p>
          <p>CategoryID: {selectedProduct.category_id}</p>
          <p>Available Product: {selectedProduct.available}</p>
          <p>VendorId: {selectedProduct.vendor_id}</p>
          <p>Instock: {selectedProduct.instock}</p>
          <p>ExpiryDate: {selectedProduct.expiryDate}</p>
          <p>CreatedAt: {selectedProduct.createdAt}</p>
          <p>updatedAt: {selectedProduct.updatedAt}</p>
          
          <button className="close-button  bg-[#E2F4FF] my-5 border rounded px-3 " onClick={handleCloseClick}> x</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
