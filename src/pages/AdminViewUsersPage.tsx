import UserTable from '../components/Admin/UserTable';
import Layout from '../Layout';

const AdminViewUsersPage = () => {
  return (
    <Layout>
      <div className="admin-view md:ml-52 ">
        <div className="">
          <div className="pt-20 flex flex-col items-center ">
            <div className="dashboard flex flex-col gap-8 flex-wrap w-[100%]">
              <div className="flex justify-between md:justify-end gap-10 items-center flex-wrap">
                <div className="max-[1023px]:flex-1 flex flex-wrap gap-8 justify-between items-end"></div>
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
};

export default AdminViewUsersPage;
