import { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import moment, { Moment } from 'moment';
import { OrdersAction, getByIdOrdersAction } from '../../redux/action/OrdersAction';
import Review from '../../components/review/review';
import { Navigation } from "../../components";

interface Product {
  id: number;
  name: string | number | null | undefined;
  quantity: number | null | undefined;
  subtotal: number | null | undefined;
}

interface OrdersData {
  data: Order[] | null | undefined;
  message: string | undefined;
}

interface BillingInfo {
  country: string | null | undefined;
  street_address: string | number | null | undefined;
  town: string | null | undefined;
  state: string | null | undefined;
  email: string | null | undefined;
  post_code: string | null | undefined;
}

interface Order {
  id: number;
  data: OrdersData;
  products_info: Product[];
  billing_info: BillingInfo;
  createdAt: Moment;
  total: number;
  status: 'pending' | 'paid';
}

function Orders() {
  let [isOpen, setIsOpen] = useState(false);
  const [viewOrder, setViewOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  const dispatch = useDispatch();

  const ordersListing = useSelector((state: Order[] | any) => state.orders.data.order);

  useEffect(() => {
    setOrders(ordersListing || []);
  }, [ordersListing]);


  useEffect(() => {
    dispatch(OrdersAction() as any);
  }, [dispatch]);

  const handleModelState = () => {
    if (isOpen) {
      setIsOpen(false);
      window.location.reload();
    } else {
      setIsOpen(true);
    }
  }

  const handleModal = (id: number) => {
    dispatch(getByIdOrdersAction({ orderId: id }) as any).then((response: any) => {
      setViewOrder(response.payload.data.order.order);
      handleModelState()
      setOrders(ordersListing);
    });
  };

  return (
    <>
      <Navigation />
      <div className="flex flex-col ">
        <div className="flex-1 p-3 font-semibold text-sm text-gray-600">
          <div className="flex gap-2 justify-start">
            <div className="">Home</div>
            <div className="text-center">
              <i className="material-symbols-rounded">arrow_forward_ios</i>
            </div>
            <div className="">My orders</div>
          </div>
        </div>
        {orders.length > 0 ?
          <div className="relative overflow-x-auto lg:m-[70px] mt-0">
            <table className="w-full text-sm text-left text-black">
              <thead className="text-xs uppercase bg-[#E2F4FF] border-none">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Order id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Number of Items
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ordered Date
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order: Order) => (
                  <tr
                    key={order.id}
                    className="bg-white border-b hover:bg-gray-100 hover:cursor-pointer"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      # {order.id}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {order.products_info.length} items
                    </th>
                    <td className="px-6 py-4">{order.total}</td>
                    <td className="px-6 py-4">{moment(order?.createdAt).fromNow()}</td>
                    <td className="px-6">
                      <p className="flex gap-1 justify-stretch text-[#90b9d3]" onClick={() => handleModal(order.id)}>
                        <i className="material-symbols-rounded cursor-pointer">
                          shopping_bag
                        </i>
                        <span
                          className="hidden lg:block md:block mt-1"

                        >
                          View details
                        </span>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* dialog */}

            <Dialog
              open={isOpen}
              onClose={() => handleModelState()}
              as="div"
              className="relative z-10"
            >
              <div className="fixed inset-0 backdrop-blur-sm bg-opacity-75 transition-opacity"></div>
              <Transition
                as={Fragment}
                show={isOpen}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
              >
                <div className="bg-black/30 h-screen w-screen backdrop-blur-sm fixed inset-0 z-1=50 overflow-y-auto ease-out duration-300">
                  <div className="flex justify-center p-4 text-center items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[100%] max-w-[60%]">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e3e7e9] text-[#2184c2] sm:mx-0 sm:h-10 sm:w-10">
                            <i className="material-symbols-rounded">shopping_bag</i>
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 className="text-lg font-semibold leading-6 text-gray-900 mt-2">
                              Order # {viewOrder?.id}
                            </h3>
                            <div className="flex flex-col gap-3 mt-5">
                              {viewOrder?.products_info.map((product, index) => (
                                <div className="flex flex-col" key={index}>
                                  <div className="flex-1">
                                    <h3 className="text-base font-semibold leading-6">
                                      {index + 1}. {product.name}
                                    </h3>
                                  </div>
                                  <div className="flex-1 ml-3">
                                    <p className="text-sm text-gray-500">
                                      Quantity: {product?.quantity}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      Subtotal: {product?.subtotal} USD
                                    </p>
                                  </div>
                                  {viewOrder?.status === 'paid' && (
                                    <Review id={product?.id} />
                                  )}
                                </div>
                              ))}
                              <div className="flex flex-col">
                                <h3 className="text-base font-semibold leading-6">
                                  Total: {viewOrder?.total}
                                </h3>
                              </div>
                              <hr />
                              <h3 className="text-base font-semibold leading-6">
                                Billing information
                              </h3>
                              <div className="flex flex-col">
                                <div className="flex-1 ml-3">
                                  <p className="text-sm text-gray-500">
                                    Country: {viewOrder?.billing_info?.country}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Town: {viewOrder?.billing_info?.town} USD
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Street_address: {viewOrder?.billing_info?.street_address} USD
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    State: {viewOrder?.billing_info?.state} USD
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Post_code: {viewOrder?.billing_info?.post_code} USD
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    Email: {viewOrder?.billing_info?.email} USD
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-5">
                          {viewOrder?.status === 'pending' && (
                            <>
                              <div className="bg-green-600 text-white px-3 rounded-full py-1 flex">
                                <i className="material-symbols-rounded">done</i> Pending
                              </div>
                              <div className="bg-gray-200 text-gray-400 px-3 rounded-full py-1 flex">
                                Completed
                              </div>
                            </>
                          )}
                          {viewOrder?.status === 'paid' && (
                            <>
                              <div className="bg-gray-200 text-gray-400 px-3 rounded-full py-1 flex">
                                <i className="material-symbols-rounded"></i>Pending
                              </div>
                              <div className="bg-green-600 text-white px-3 rounded-full py-1 flex">
                                <i className="material-symbols-rounded">done</i> Paid
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex gap-3">
                        <button onClick={() => handleModelState()}>Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </Dialog>
          </div>
          :
          <div className="text-center p-5 font-bold ">
            <h1>No orders found</h1>
          </div>
        }

      </div>
    </>
  );
}

export default Orders;
