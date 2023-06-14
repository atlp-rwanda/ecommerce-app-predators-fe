
import { Sidebar} from '../../components';
import UserTable from '../../components/table/UserTable';
import cart from "./../../assets/dashboard/cart.svg";
import profile from "./../../assets/dashboard/account_photo.jpg";
export default function VendorPage() {

  return (
    <div className="products">
      <Sidebar />
      <div className='md:ml-52'>
        <div className='pt-20 flex flex-col items-center lg:mx-20'>
          <div className="dashboard flex flex-col gap-8 flex-wrap w-[90%]">
            <div className='flex justify-between md:justify-end gap-10 items-center flex-wrap'>
              <div className="max-[1023px]:flex-1 flex flex-wrap gap-8 justify-between items-end">
                <div className="dashboard__search shadow-md border rounded-md flex gap-3 p-1">
                  <i className='material-symbols-rounded text-gray-400'>search</i>
                  <input className=" focus:outline-none placeholder:text-gray-400 outline-0 bg-inherit border-0 xs:w-64 md:w-72" type="text" placeholder='Search product ...' />
                </div>
                <div className="dashboard__notification flex gap-7 text-blue-500">
                  <i className="material-symbols-rounded">message</i>
                  <i className="material-symbols-rounded">notifications</i>
                </div>
              </div>
              <div className=" dashboard__photo hidden lg:block rounded-full overflow-hidden w-20 h-20">
                <img src={profile} alt="profile_photo" className='object-cover' />
              </div>
            </div>
            <div className="cards flex gap-5 flex-wrap justify-between items-end">
              <div className="pending_orders bg-customBlue text-white rounded-xl w-64 h-24 relative overflow-hidden p-3">
                <div className="absolute -bottom-2 -left-3 scale-75">
                  <img src={cart} alt="stock" />
                </div>
                <div className="standings flex flex-wrap justify-between h-full w-full">
                  <h2 className=' text-lg pl-5 justify-self-center'>Users</h2>
                  <p className=' text-5xl px-2 self-end'>100</p>
                </div>
              </div>
            </div>
          </div>
          <UserTable />
          <div className="buttons_pagination flex text-sm font-light">
            <button className='border p-2 text-center rounded-l-lg h-10'>Prev</button>
            <button className='border-t border-b p-2 text-center h-10 w-10 current bg-slate-500'>1</button>
            <button className='border p-2 text-center h-10 w-10'>2</button>
            <p className='border-t border-b p-2 h-10 text-center w-10 inline-block'>...</p>
            <button className='border-t border-b border-l p-2 text-center h-10 w-10'>40</button>
            <button className='border p-2 text-center rounded-r-lg h-10'>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}