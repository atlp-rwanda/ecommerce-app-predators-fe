import { useEffect } from 'react'
import { fetchProductsCollection } from '../../redux/action/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../redux/reducers/productReducer';
export default function Table() {
  const product = useSelector((state: { CollectionProducts: { data:Product } }) => state.CollectionProducts.data);

  const dispatch = useDispatch ()
   
  useEffect(() => {

     dispatch(fetchProductsCollection()as any)
	//dispatches an action to the store (redux) 
 
  }, [dispatch])
  console.log('collected product', product?.data) 
  return (
    
    <div className="relative mt-10 mb-6 shadow-lg w-[90%]">
      <p className="font-medium mb-2 inline-block">Recent Products</p>
      <div className="w-full pb-2 overflow-x-auto">
        <table className="font-light w-full table-fixed">
          <thead className="bg-blue-200">
           
            <tr>
              <th className="w-32 text-start font-light px-6 py-1">Name</th>
              <th className="w-32 text-start font-light px-6 py-1">#Id</th>
              <th className="w-32 text-start font-light px-6 py-1">Products</th>
              <th className="w-32 text-start font-light px-6 py-1">Category</th>
              <th className="w-32 text-start font-light px-6 py-1">
                Description
              </th>
              <th className="w-32 text-start font-light px-6 py-1">Amount</th>
              <th className="w-32 text-start font-light px-6 py-1">Date</th>
              <th className="w-32 text-start font-light px-6 py-1">Action</th>
            </tr> 
        
          </thead>
          <tbody>
  {product?.data && product.data.map((product: Product) => {
    return (
      <tr className="" key={product.id}>
        <td className="w-32 text-start px-6 py-1">{product.name}</td>
        <td className="w-32 text-start px-6 py-1">{product.id}</td>
        <td className="w-32 text-start px-6 py-1">{product.name}</td>
        <td className="w-32 text-start px-6 py-1">{product.category_id}</td>
        <td className="w-32 text-start px-6 py-1">{product.description.slice(0,10)}</td>
        <td className="w-32 text-start px-6 py-1">{product.price}</td>
        <td className="w-32 text-start px-6 py-1">{product.expiryDate.slice(0,10)}</td>
        <td className="w-32 text-start px-6 py-1">
          <div className="symbols flex justify-between">
            <i className="material-symbols-rounded text-blue-500">visibility</i>
            <i className="update material-symbols-rounded text-orange-500">edit</i>
            <i className="material-symbols-rounded text-red-500">delete</i>
          </div>
        </td>
      </tr>
    );
  })}
</tbody>

        </table>
      </div>
    </div>
    
  );
}
