import UserTable from '../../components/table/UserTable';
import cart from './../../assets/dashboard/cart.svg';
import Layout from '../../Layout';
export default function VendorPage() {
  return (
    <Layout>
      <div className="products ml-52">
        <div className="w-[100%]">
          <div className="pt-20 flex flex-col items-center mx-6">
            <div className="dashboard flex flex-col gap-8 flex-wrap w-[100%]">
              <div className="cards flex gap-5 flex-wrap justify-between items-end">
                <div className="pending_orders bg-customBlue text-white rounded-xl w-64 h-24 relative overflow-hidden p-3">
                  <div className="absolute -bottom-2 -left-3 scale-75">
                    <img src={cart} alt="stock" />
                  </div>
                  <div className="standings flex flex-wrap justify-between h-full w-full">
                    <h2 className=" text-lg pl-5 justify-self-center">Users</h2>
                    <p className=" text-5xl px-2 self-end">100</p>
                  </div>
                </div>
              </div>
            </div>
            <UserTable />
            <div className="buttons_pagination flex text-sm font-light">
              <button className="border p-2 text-center rounded-l-lg h-10">
                Prev
              </button>
              <button className="border-t border-b p-2 text-center h-10 w-10 current bg-slate-500">
                1
              </button>
              <button className="border p-2 text-center h-10 w-10">2</button>
              <p className="border-t border-b p-2 h-10 text-center w-10 inline-block">
                ...
              </p>
              <button className="border-t border-b border-l p-2 text-center h-10 w-10">
                40
              </button>
              <button className="border p-2 text-center rounded-r-lg h-10">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
