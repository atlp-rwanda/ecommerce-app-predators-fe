
import profile from "./../assets/dashboard/account_photo.jpg";
import Notification from "./notification/Notification";
import { Sidebar } from '../components';
import { useState } from 'react';
function HeaderNav() {
    const [isOpen, menu] = useState(false);
    const [openPane, setOpenPane] = useState(false);
    const handleCloseMenu = () => {
        menu(!isOpen)
    }

    return (
        <>
            <div className="dashboard fixed bg-white flex flex-col gap-8 flex-wrap w-[100%] p-2 shadow-md mb-3">
                <div className="  md:hidden">
                    <div className="">
                        <div onClick={() => handleCloseMenu()} className={`${isOpen ? "translate-x-52" : "translate-x-0"} transition-transform ease-in-out duration-500 flex gap-2 w-[73px] cursor-pointer`}>
                            {isOpen ?
                                <i className='material-symbols-rounded'>close</i> :
                                <i className='material-symbols-rounded'>menu</i>
                            }<span >Menu</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between md:justify-end gap-10 items-center flex-wrap'>
                    <div className="max-[1023px]:flex-1 flex flex-wrap gap-8 justify-between items-end">
                        <div className="dashboard__search shadow-md border rounded-md flex gap-3 p-1">
                            <i className='material-symbols-rounded text-gray-400'>search</i>
                            <input className=" focus:outline-none placeholder:text-gray-400 outline-0 bg-inherit border-0 xs:w-64 md:w-72" type="text" placeholder='Search product ...' />
                        </div>
                        <div className="dashboard__notification flex gap-7 text-blue-500">
                            <i className="material-symbols-rounded">message</i>
                            <div className="cursor-pointer" onClick={() => setOpenPane(true)}> <i className="material-symbols-rounded" >notifications</i>
                            </div>
                        </div>
                    </div>
                    <div className=" dashboard__photo hidden lg:block rounded-full overflow-hidden w-10 h-10">
                        <img src={profile} alt="profile_photo" className='object-cover' />
                    </div>
                </div>

            </div>
            <Sidebar />
            <Notification OpenPane={openPane} />
        </>
    )
}

export default HeaderNav