import { Link } from 'react-router-dom';
import electron from '../../assets/sidebar/Electron.svg';
import { useState } from 'react';

export default function Sidebar() {
    const [isOpen, menu] = useState(false);

    const handleCloseMenu = () => {
        menu(!isOpen)
    }

  return (
    <>
        <div className={`${ isOpen ? "translate-x-0" : "-translate-x-52" } md:translate-x-0 z-40 transition-transform ease-in-out duration-500 flex fixed sidebar h-screen flex-col justify-between w-52 bg-customBlue p-5 pb-18 text-sm`} >
            <div>
                <div className="sidebar__logo flex items-center gap-2 text-white mb-9">
                    <img className="logo__image" src={electron} alt="Electron logo"/><i className="logo__dropdown material-symbols-rounded cursor-pointer">arrow_drop_down_circle</i>
                </div>
                <div className="sidebar__menu" >
                    <ul className='flex flex-col gap-5 '>
                        <li>
                            <Link to="/product-page" className='flex text-white items-center gap-3 text-inactive'>
                                <i className="material-symbols-rounded cursor-pointer">space_dashboard</i> <span className="menu__item">Dashboard</span>
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded cursor-pointer">signal_cellular_alt</i> <span className="menu__item">Statistics</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded cursor-pointer">attach_money</i> <span className="menu__item">Payment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded cursor-pointer">shopping_bag</i> <span className="menu__item">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded cursor-pointer">message</i> <span className="menu__item">Messages</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar__settings">
                <ul className='flex flex-col gap-5'>
                    <li>
                        <Link to="/" className='flex items-center gap-3 text-inactive'>
                            <i className="settings__icon material-symbols-rounded cursor-pointer">settings</i><span className="settings__item">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3 text-inactive'>
                            <i className="settings__icon material-symbols-rounded cursor-pointer">logout</i><span className="settings__item">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={`${isOpen? "translate-x-52": "translate-x-0  bg-primary p-2"} transition-transform ease-in-out duration-500 close_icon flex justify-center pt-5 md:hidden`}>
            <div className="w-[90%]">
                <div onClick={() => handleCloseMenu()}  className={isOpen? 'text-black flex gap-2 w-[73px] cursor-pointer' : 'flex gap-2 w-[73px] cursor-pointer text-white'}>
                    {isOpen?
                        <><i className='material-symbols-rounded cursor-pointer'>close</i><span>Close</span></> :
                        <><i className='material-symbols-rounded cursor-pointer'>menu</i><span>Menu</span></>
                    }
                </div>
            </div>
        </div>
    </>
  );
}
