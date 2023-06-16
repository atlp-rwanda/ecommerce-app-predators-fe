import { useState } from 'react'
import {Table, Product_form } from '../../components';
import { ToastContainer } from 'react-toastify';
import HeaderNav from '../../components/HeaderNav';
import cart from "./../../assets/dashboard/cart.svg";
import add from "./../../assets/dashboard/plus.svg";
export default function VendorPage() { 
  const [visible, showForm] = useState(false);
  const handleClose = () => showForm(false)
  return (
    <div className="">
      <ToastContainer />
      <div className="flex flex-row">       
        <HeaderNav/>
        <div className="mt-[5%]  p-5">
          <div className="cards flex gap-5 flex-wrap justify-between items-end">
              <div className="pending_orders bg-customBlue text-white rounded-xl w-64 h-24   overflow-hidden p-3">
                <div className="absolute -bottom-2 -left-3 scale-75">
                  <img src={cart} alt="stock" />
                </div>
                <div className="standings flex flex-wrap justify-between h-full w-full">
                    <h2 className=' text-lg pl-5 justify-self-center'>Instock</h2>
                    <p className=' text-5xl px-2 self-end'>100</p>
                </div>
              </div>
              <div onClick={() => showForm(true)} className="add_new_product cursor-pointer bg-tertiary h-14 w-14 p-3 flex items-center justify-center rounded-xl">
                <img src={add} alt="add product" />
              </div>
          </div>
 
          <div className='flex flex-col items-center'> 
            <Table />
            <div className="buttons_pagination flex text-sm font-light">
              <button className='border p-2 text-center rounded-l-lg h-10'>Prev</button>
              <button className='border-t border-b p-2 text-center h-10 w-10 current bg-slate-500'>1</button>
              <button className='border p-2 text-center h-10 w-10'>2</button>
              <p className='border-t border-b p-2 h-10 text-center w-10 inline-block'>...</p>
              <button className='border-t border-b border-l p-2 text-center h-10 w-10'>40</button>
              <button className='border p-2 text-center rounded-r-lg h-10'>Next</button>
            </div>
            <Product_form onClose={handleClose} visible={visible}/>
          </div>
        </div>
      </div>

    </div>
  )
}