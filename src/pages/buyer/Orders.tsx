import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import { useAppDispatch } from '../../redux/store/hooks'; 
import { OrdersAction,getByIdOrdersAction } from '../../redux/action/OrdersAction'; 
import moment from 'moment'; 
import  {useState,Fragment } from 'react'
import { Dialog,Transition  } from '@headlessui/react' 
import { useDispatch, useSelector } from 'react-redux'; 






type item = {
  id: number
}

interface Order {
  data: any;
  id: number;
  name: string;
  createdAt: string;
}


function Orders() { 
 let [isOpen, setIsOpen] = useState(false);  
const [Vieworder, setViewOrder] =useState('');
const [orders, setOrders] = useState();

const disptach = useDispatch();

const ordersListing = useSelector(
    (state: { orders: { data: any } }) => state.orders.data
  );


useEffect(()=>{
setOrders(ordersListing);
},[]);

 
useEffect(()=>{
  disptach(OrdersAction() as any)
},[disptach]);


const HandleModel = (id: number)=>{ 
   disptach(getByIdOrdersAction(id) as any).then((response)=>{
    setViewOrder(response.payload.data.order.order) 
    setIsOpen(true);
    console.table(response.payload.data.order.order)
   });
} 

  return (
  <div className="flex flex-col"> 
        <div className="flex-1 p-3 font-semibold text-lg">
          <div className='flex gap-2 justify-start'> 
          <div className="">Home</div>
            <div className="text-center mt-1">
              <i className="material-symbols-rounded">arrow_forward_ios</i>
            </div>          
            <div className="">My orders</div>
          </div>
        </div> 
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-black ">
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
                    {orders?.data?.order?.map((order: { id: Key | null | undefined; products_info: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }[]; createdAt: moment.MomentInput; }) => (

                      <tr
                        key={order.id}
                        className="bg-white border-b hover:bg-gray-100 hover:cursor-pointer"
                      >
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                        # {order.id}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white">
                          {order.products_info.length} items
                        </th>
                        <td className="px-6 py-4">{order.total}</td>
                        <td className="px-6 py-4">{moment(order?.createdAt).fromNow()}</td>
                        <td className="px-6">
                          <p className="flex gap-1 justify-stretch text-[#90b9d3]">
                            <i className="material-symbols-rounded cursor-pointer">shopping_bag</i>
                            <span className="hidden lg:block md:block mt-1" onClick={() => HandleModel(1)}>
                              View details
                            </span>
                          </p>
                        </td>
                      </tr>
                    ))} 
                </tbody>
            </table>
  

          {/* dialog */}
 
              <Dialog open={isOpen} onClose={() => setIsOpen(false)} as="div" className="relative z-10">
              <div className="fixed inset-0   backdrop-blur-sm bg-opacity-75 transition-opacity"></div>
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
              <div  className="bg-black/30 h-screen w-screen  backdrop-blur-sm fixed inset-0 z-1=50 overflow-y-auto ease-out duration-300">
                  <div className="flex justify-center p-4 text-center items-center sm:p-0"> 

                  <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[100%] max-w-[60%]">
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                      
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#e3e7e9] text-[#2184c2] sm:mx-0 sm:h-10 sm:w-10">
                            <i  className="material-symbols-rounded">shopping_bag</i>
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <h3 className="text-lg font-semibold leading-6 text-gray-900 mt-2">Order # {Vieworder?.id} </h3>
                          <div className=" flex flex-col gap-3 mt-5">
                            <div className="flex flex-col">
                              <div className="flex-1"> 
                                <h3 className="text-base font-semibold leading-6">1.   Sumsang 1111TV 52 inch</h3>
                              </div>
                              <div className="flex-1 ml-3"> 
                                <p className="text-sm text-gray-500">Quantity: 0 </p>
                                <p className="text-sm text-gray-500">Subtotal: 0 USD</p> 
                              </div>
                            </div>
                            <div className="flex flex-col">
                              <div className="flex-1"> 
                                <h3 className="text-base font-semibold leading-6">2.   Sumsang 1111TV 52 inch</h3>
                              </div>
                              <div className="flex-1 ml-3"> 
                                <p className="text-sm text-gray-500">Quantity: 0 </p>
                                <p className="text-sm text-gray-500">Subtotal: 0 USD</p> 
                              </div>
                            </div> 
                            <div className="flex flex-col">
                                <h3 className="text-base font-semibold leading-6">Total :{Vieworder?.total} </h3>
                            </div>                      
                          </div>  
                        </div>
                    </div>
                    <div className="flex justify-end gap-5">
                        <div className='bg-green-600 text-white px-3 rounded-full py-1 flex'> <i className='material-symbols-rounded'>done</i> Pending</div>
                        <div className="bg-gray-200 px-3 rounded-full py-1 flex">Completed</div>
                        <div className="bg-gray-200  px-3 rounded-full py-1 flex">delivered</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex gap-3">
                    
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                    </div> 
                </div>
              </div>
              </Transition>
            </Dialog> 
        </div>

      </div>
  )
}

export default Orders