import { useDispatch, useSelector } from 'react-redux';
import {
  deleteFromWishlist,
  getWishlist,
} from '../../redux/action/WishlistAction';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
interface Wishlist {
  [x: string]: number;
  Product: any;
  productId: number;
  id: number;
  price: number;
  quantity: number;
}
interface MetaTypes {
  arg: number;
  requestId: string;
  requestStatus: string;
}
interface PayloadTypes {
  message: string;
  wishlist: any[];
}
interface ResponseTypes {
  then: any;
  meta: MetaTypes;
  payload: PayloadTypes;
  type: string;
}
const WishlistTable = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state: any) => state.wishlist.data);
  useEffect(() => {
    dispatch(getWishlist() as any);
  }, [dispatch]);

  const handleDeleteFromWishlist = (productId: number) => {
    dispatch(
      deleteFromWishlist(productId as number) as unknown as ResponseTypes
    )
      .then((response: ResponseTypes) => {
        console.log(response);
        setTimeout(() => {
           window.location.reload(); 
        }, 5000); // Reload after 5 seconds (5000 milliseconds)
      })
      .catch((error: any) => {
        // Handle error if necessary
        console.error('Error deleting from wishlist:', error);
      });
  };

  return (
    <div className="relative mt-10 shadow-lg w-[90%] py-10 px-20 my-10">
      <ToastContainer />
      <div className="w-full pb-2 overflow-x-auto">
        <table className="font-light w-full">
          <thead className="bg-blue-200">
            <tr>
              <th className="w-32 text-start font-bold px-6 py-1 capitalize">
                Product
              </th>
              <th className="w-32 text-start font-bold px-6 py-1 capitalize">
                Price
              </th>
              <th className="w-32 text-start font-bold px-6 py-1 capitalize">
                Quantity
              </th>
              <th className="w-32 text-start font-bold px-6 py-1">SubTotal</th>
              <th className="w-32 text-start font-bold px-6 py-1">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Add table rows here */}
            {wishlist?.data?.wishlist?.map((item: Wishlist) => (
              <tr key={item.id}>
                <td className="w-48 text-start font-bold px-6 py-1">
                  <div className="flex items-center">
                    <img
                      src={item.Product.picture_urls[0]}
                      className="w-8 h-8 mr-2"
                      /*  alt={item.Product.name} */
                    />
                    {item.Product.name}
                  </div>
                </td>

                <td className="w-48 text-start font-light px-6 py-1">
                  {item.Product.price}
                </td>
                <td className="w-48 text-start font-light px-6 py-1">
                  <div className="flex items-center">
                    <button className="text-gray-500 focus:outline-none border border-gray-300 rounded-l px-3 py-1">
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      defaultValue="1"
                      className="w-12 text-center border border-gray-300 focus:outline-none px-2 py-1"
                    />
                    <button className="text-gray-500 focus:outline-none border border-gray-300 rounded-r px-3 py-1">
                      +
                    </button>
                  </div>
                </td>

                <td className="w-48 text-start font-bold px-6 py-1">
                  {item.Product.price}
                </td>
                <td className="w-48 text-start font-light px-6 py-1">
                  <div className="symbols flex justify-between">
                    <i
                      className="material-symbols-rounded text-customBlue-500 cursor-pointer"
                      onClick={() => handleDeleteFromWishlist(item.productId)}
                    >
                      cancel
                    </i>
                    <button className="bg-tertiary text-white font-bold py-1 px-4 rounded">
                      Add to Cart
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10 flex justify-between">
          <button className="bg-tertiary hover:bg-red text-white font-bold py-1 px-6 rounded-lg capitalize">
            Continue Shopping
          </button>
          {/*  <button
            className="bg-red-500 hover:bg-green text-white font-bold py-1 px-4 rounded-lg ml-5 uppercase"
          >
            Clear Wishlist
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WishlistTable;
