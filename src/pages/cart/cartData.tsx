/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NavHeader from '../../components/navigation/Navigation';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllCarts,
  deleteCart,
  deleteAllCarts,
  updateCartQuantity,
} from '../../redux/action/cartAction';
import { Link, NavLink } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

interface CartItem {
  [x: string]: any;
  id: number;
  amount: string;
  quantity: number;
  subtotal: string;
  imageSrc: string;
  name: string;
  coupon: string;
  createdAt: number;
}

const ResponsiveTable = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const [, setQuantities] = useState<number[]>([]);
  useEffect(() => {
    dispatch(getAllCarts() as any);
  }, [dispatch]);

  const carts = useSelector(
    (state: {
      carts: {
        carts: {
          [x: string]: any;
          carts: CartItem[];
        };
      };
    }) => state.carts.carts
  );

  useEffect(() => {
    if (carts?.data?.data) {
      const initialQuantities = Array(carts.data.data.length).fill(0);
      setQuantities(initialQuantities);
    }
  }, [carts]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    // Create a copy of the data array
    const updatedData = [...carts.data.data];
    const updatedCartItem = { ...updatedData[index] };
    updatedCartItem.quantity = newQuantity;
    updatedData[index] = updatedCartItem;
    dispatch(
      updateCartQuantity({
        id: updatedCartItem.product_id,
        quantity: newQuantity,
      })
    );
  };

  const handleQuantityIncrement = (productId: number, index: number) => {
    const newQuantity = Math.max(0, carts.data.data[index].quantity + 1);
    handleQuantityChange(index, newQuantity);
    dispatch(
      updateCartQuantity({ id: productId, quantity: newQuantity }) as any
    );
  };

  const handleQuantityDecrement = (productId: number, index: number) => {
    const newQuantity = Math.max(0, carts.data.data[index].quantity - 1);
    handleQuantityChange(index, newQuantity);
    dispatch(
      updateCartQuantity({ id: productId, quantity: newQuantity }) as any
    );
  };

  const handleDeleteAllCarts = () => {
    dispatch(deleteAllCarts() as any);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <NavHeader />
      </div>
      <div className="container mx-auto mt-52">
        <div className="grid grid-cols-6 max-sm:grid-cols-1 sm:grid-cols-1  lg:grid-cols-7 gap-2 mt-2 mb-5">
          <div className="col-span-5 sm:col-span-5 max-sm:w-[90%] max-sm:mx-auto max-sm:overflow-x-auto lg:col-span-5">
            <table className="min-w-full divide-y divide-gray-200 bg-secondary font-Poppins">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-md font-semibold text-primary tracking-wider">
                    Product
                  </th>

                  <th className="px-6 py-3 text-left text-md font-semibold text-primary tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-md font-semibold text-primary tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-md font-semibold text-primary tracking-wider">
                    Subtotal
                  </th>
                  <th className="px-6 py-3 text-left text-md font-semibold text-primary tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {carts?.data?.data
                  .slice(0, -1)
                  .map((cart: CartItem, index: number) => (
                    <tr key={cart.id}>
                      <td className="px-6 py-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-fit w-16">
                            {cart.product &&
                              cart.product.picture_urls &&
                              cart.product.picture_urls[0] && (
                                <img
                                  className="rounded-full"
                                  src={cart.product.picture_urls[0]}
                                  alt="prodImQuantity"
                                />
                              )}
                          </div>

                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">
                              {cart.product && cart.product.name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {cart.product.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <button
                            className="px-2 py-1 rounded-md hover:bg-gray-200 border border-gray-300"
                            onClick={() =>
                              handleQuantityDecrement(cart.id, index)
                            }
                          >
                            -
                          </button>
                          <input
                            className="py-1 pl-1 border border-gray-300 text-center w-10"
                            type="number"
                            value={cart.quantity} // Replace quantities[index] with cart.quantity
                            onChange={(e) =>
                              handleQuantityChange(
                                index,
                                parseInt(e.target.value, 10)
                              )
                            }
                          />
                          <button
                            className="px-2 py-1 rounded-md hover:bg-gray-200 border border-gray-300"
                            onClick={() =>
                              handleQuantityIncrement(cart.id, index)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {cart.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          className="text-red-400 font-semibold border border-red-400 px-5 py-2
                           rounded-full  hover:bg-red-400 hover:text-white duration-500"
                          onClick={() => dispatch(deleteCart(cart.id) as any)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="mx-16 flex justify-center space-x-16 my-6">
              <NavLink
                to="/"
                className="bg-tertiary hover:bg-yellow-400 duration-500 text-white font-semibold py-2 px-4 rounded-full"
              >
                Continue Shopping
              </NavLink>

              <div className="flex flex-col">
                <div className="flex justify-between text-lg mx-5 font-semibold">
                  {/*   <label className="">Total Amount: </label>
                  <label className="mx-4">{cart?.data?.data[4].total}</label> */}
                </div>
              </div>
              <button
                className="text-red-400 font-semibold border border-red-400
                 hover:bg-red-400 hover:text-white px-5 py-2 rounded-full duration-500"
                onClick={handleDeleteAllCarts}
              >
                clean cart
              </button>
            </div>
          </div>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2 border border-gray-300">
            <div className="py-3 text-center text-md bg-secondary text-primary font-semibold">
              <label>Subtotal</label>
            </div>
            <div className="flex justify-between mx-5 font-semibold">
              <label>Subtotal</label>
              <label>${}</label>
            </div>
            <hr className="mx-5 mt-4" />
            <div className="h-fit">
              <form className="mt-4 flex justify-between mx-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    className="border border-gray-300 py-2 pl-2 pr-10 rounded-2xl w-full"
                    placeholder="Enter coupon code"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 h-full px-4 text-gray-500"
                  >
                    Apply
                  </button>
                </div>
              </form>
              <hr className="mx-5 mt-4" />
              <div className="mx-5 my-4">
                <select
                  id="country"
                  className="border border-gray-300 py-2 px-3 rounded-2xl w-full"
                >
                  <option value="USA">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">Rwanda</option>
                  <option value="UK">Burundi</option>
                  <option value="UK">Kenya</option>
                  <option value="UK">Uganda</option>
                </select>
              </div>
              <div className="flex justify-between mx-4 font-Poppins text-primary my-4">
                <label>Total amount</label>
                <label>$23.20</label>
              </div>
              <div className="flex mx-5">
                <Link to="/checkout">
                  <button
                    type="submit"
                    className="bg-tertiary w-full text-white py-2 px-4 rounded-2xl mb-5 font-semibold"
                  >
                    Proceed to checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>{' '}
        <Footer />
      </div>
    </>
  );
};

export default ResponsiveTable;
