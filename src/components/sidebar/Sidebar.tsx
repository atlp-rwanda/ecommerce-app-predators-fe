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
        <div className={`${ isOpen ? "block" : "hidden" } text-gray-400 lg:block lg:sticky lg:top-0 min-w-[210px] fixed flex flex-col z-50 bg-customBlue p-5 pb-18 h-screen justify-between  transition-transform ease-in-out duration-500 scroll-auto`} >
            <div className='flex-1 lg:h-[90%]'>
                <div className="sidebar__logo flex items-center gap-2 text-white mb-9">
                    <img className="logo__image" src={electron} alt="Electron logo"/><i className="logo__dropdown material-symbols-rounded">arrow_drop_down_circle</i>
                </div>
                <div className="sidebar__menu" >
                    <ul className='flex flex-col gap-5 '>
                        <li>
                            <Link to="/product-page" className='flex text-white items-center gap-3 text-inactive'>
                                <i className="material-symbols-rounded">space_dashboard</i> <span className="menu__item">Dashboard</span>
                            </Link>
                        </li>
                    
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded">signal_cellular_alt</i> <span className="menu__item">Statistics</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded">attach_money</i> <span className="menu__item">Payment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded">shopping_bag</i> <span className="menu__item">Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='flex items-center gap-3 text-inactive'>
                                <i className="menu__icon material-symbols-rounded">message</i> <span className="menu__item">Messages</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar__settings">
                <ul className='flex flex-col gap-5'>
                    <li>
                        <Link to="/" className='flex items-center gap-3 text-inactive'>
                            <i className="settings__icon material-symbols-rounded">settings</i><span className="settings__item">Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className='flex items-center gap-3 text-inactive'>
                            <i className="settings__icon material-symbols-rounded">logout</i><span className="settings__item">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="md:hidden p-3 z-50 bg-primary text-white">
            <div className="">
                <div onClick={() => handleCloseMenu()} className={`${isOpen? "translate-x-0": "translate-x-0"} transition-transform ease-in-out duration-500  cursor-pointer`}>
                    {isOpen?
                        <i className='material-symbols-rounded'>close</i> :
                        <i className='material-symbols-rounded'>menu</i>
                    }
                </div>
            </div>
        </div>

    </>
    
  )
}