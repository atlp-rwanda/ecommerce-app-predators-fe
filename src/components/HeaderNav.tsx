import profile from './../assets/dashboard/account_photo.jpg';
import Notification from './notification/Notification';
function HeaderNav() {
  return (
    <div className="flex gap-5">
      <div className=" sticky top-0 gap-7 bg-white pt-3 pb-3 pr-3 flex flex-row flex-wrap shadow-md mb-3 md:justify-end  lg:justify-end  justify-center w-[100%]">
        <div className="flex justify-end md:justify-end gap-10 items-center ">
          <div className="max-[1023px]:flex-1 flex md:gap-8 gap-2  lg:gap-8 justify-between items-end">
            <div className="dashboard__search shadow-md border rounded-md flex gap-3 p-1">
              <i className="material-symbols-rounded text-gray-400">search</i>
              <input
                className=" focus:outline-none placeholder:text-gray-400 outline-0 bg-inherit border-0 xs:w-64 md:w-72"
                type="text"
                placeholder="Search product ..."
              />
            </div>
            <div className="dashboard__notification flex gap-7 text-blue-500">
              <div className="cursor-pointer">
                <i className="material-symbols-rounded">message</i>
              </div>
              <Notification />
            </div>
          </div>
        </div>
        <div className=" dashboard__photo hidden md:block lg:block rounded-full overflow-hidden w-10 h-10">
          <img src={profile} alt="profile_photo" className="object-cover" />
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;
