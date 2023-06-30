import NavHeader from '../../components/buyerHeader/HeaderNav';
import HeadPhones from '../../assets/images/headphone.png';
import Send from '../../assets/images/send-2.png';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllCarts,
  deleteCart,
  deleteAllCarts,
  updateCartQuantity,
} from '../../redux/action/cartAction';

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
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState<number[]>([]);
  useEffect(() => {
    dispatch(getAllCarts() as any);
  }, [dispatch]);

  const cart = useSelector(
    (state: {
      cart: {
        carts: {
          [x: string]: any;
          cart: CartItem[];
        };
      };
    }) => state.cart.carts
  );
  console.log(quantities);
  useEffect(() => {
    if (cart?.data?.data) {
      const initialQuantities = Array(cart.data.data.length).fill(0);
      setQuantities(initialQuantities);
    }
  }, [cart]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = { ...cart };
    const updatedData = [...updatedCart.data.data]; // Create a copy of the data array

    // Create a copy of the cart item and update the quantity property
    const updatedCartItem = { ...updatedData[index] };
    updatedCartItem.quantity = newQuantity;

    updatedData[index] = updatedCartItem; // Replace the cart item in the data array
    updatedCart.data.data = updatedData; // Replace the data array in the cart object

    setCart(updatedCart);
  };

  const handleQuantityIncrement = (cartId: number, index: number) => {
    const newQuantity = Math.max(0, cart.data.data[index].quantity + 1);
    handleQuantityChange(index, newQuantity);
    dispatch(updateCartQuantity({ id: cartId, quantity: newQuantity }) as any);
  };

  const handleQuantityDecrement = (cartId: number, index: number) => {
    const newQuantity = Math.max(0, cart.data.data[index].quantity - 1);
    handleQuantityChange(index, newQuantity);
    dispatch(updateCartQuantity({ id: cartId, quantity: newQuantity }) as any);
  };

  console.log(cart?.data?.data);
  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <NavHeader
          onSearchText={function (_text: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
      <div className="container mx-auto mt-52">
        <div className="grid grid-cols-6 sm:grid-cols-2 lg:grid-cols-7 gap-2 mt-2">
          <div className="col-span-5 sm:col-span-5 lg:col-span-5">
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
                {cart?.data?.data
                  .slice(0, -1)
                  .map((cart: CartItem, index: number) => (
                    <tr key={cart.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-fit w-32">
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
                            className="px-2 py-1 rounded-md border border-gray-300"
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
                            className="px-2 py-1 rounded-md border border-gray-300"
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
                          className="text-red-400 font-semibold border border-red-400 px-5 py-2 rounded-full"
                          onClick={() => dispatch(deleteCart(cart.id) as any)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="mx-16 flex justify-between">
              <button className="bg-tertiary text-white font-semibold p-2 rounded-full">
                continue shopping
              </button>
              <div className="flex flex-col">
                <div className="flex justify-between text-lg mx-5 font-semibold">
                  {/*   <label className="">Total Amount: </label>
                  <label className="mx-4">{cart?.data?.data[4].total}</label> */}
                </div>
              </div>
              <button
                className="text-red-400 font-semibold border border-red-400 px-5 py-2 rounded-full"
                onClick={() => dispatch(deleteAllCarts() as any)}
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
              <label>{}</label>
            </div>
            <hr className="mx-5 mt-4" />
            <div>
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
                <button
                  type="submit"
                  className="bg-tertiary w-full text-white py-3 rounded-2xl mb-5 font-semibold"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary p-10 w-full mt-10">
          <div className="bg-white flex justify-between mx-10 h-20 rounded-2xl shadow-bottom">
            <div className="h-20 flex justify-between w-full mx-10 py-4">
              <label className="ml-10 text-primary font-bold font-Poppins text-xl pt-2">
                Subscribe newsletter
              </label>
              <div className="bg-tertiary text-white px-5 pb-2 rounded-full flex items-center w-52">
                <label className="pt-2">Email address</label>
                <img
                  src={Send}
                  alt="send"
                  className="w-5 ml-auto mt-2 cursor-pointer"
                />
              </div>
              <div className="span-col-2 mr-1 flex">
                <img src={HeadPhones} alt="headset" className="w-6 pt-2" />

                <label className="mt-3 mx-2">Call us 24/7:</label>
                <br />
                <label className="mt-3">(+250) 785 767 647</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveTable;
function setCart(updatedCart: { [x: string]: any; cart: CartItem[] }) {
  console.log(updatedCart);
  throw new Error('Function not implemented.');
}
