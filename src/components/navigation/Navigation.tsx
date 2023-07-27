import logo from '../../assets/sidebar/Electron.svg';
import { Link } from 'react-router-dom';
import { RiMenuFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { getProfile } from '../../redux/action/profileAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Navigation() {
  const Dispatch = useDispatch();
  const [isOpen, setMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [showLogOut, setShowLogOut] = useState<boolean>(false);

  const Profile = useSelector((state: any) => state.updateProfile.data.data);

  useEffect(() => {
    Dispatch(getProfile() as any);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    if (width >= 768) {
      setMenu(false);
    }

    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    };
  }, [width]);

  function handleMenu(e: { preventDefault: () => void }) {
    e.preventDefault();
    setMenu((prevState) => !prevState);
  }

  function handleLogout(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void {
    event.preventDefault();
    console.log('logout');

    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  const User_Profile = (
    <div className="relative">
      <button
        onClick={() => {
          setShowLogOut((prev) => !prev);
        }}
        className="flex gap-2"
      >
        <i className="material-symbols-rounded cursor-pointer">person</i>
        <span className="text-sm mt-1 max-[640px]:hidden">
          {Profile?.name.split(' ')[0]}
        </span>
      </button>
      {showLogOut && (
        <ul className="absolute bg-white top-10 z-40 -right-3 py-3 min-w-full flex items-start rounded-lg" >
          <li onClick={handleLogout} className="text-slate-500 sm:text-black hover:text-tertiary px-4 cursor-pointer">Logout</li>
        </ul>
        )}
    </div>
  );

  return (
    <div className=" font-Poppins">
      <div className=" max-[768px]:hidden py-5 px-[7%] flex justify-between relative">
        <div>
          <span className="text-sm">
            Need help? Call us: (+25) 0785 7676 47
          </span>
        </div>
        <div className="flex gap-5">
          <div className="flex gap-2">
            <i className="material-symbols-rounded cursor-pointer">
              location_on
            </i>
            <span className="text-sm">Our store</span>
          </div>
          <div className="flex gap-2">
            <Link to="/my/orders" className="flex gap-2">
              <i className="material-symbols-rounded cursor-pointer">
                local_shipping
              </i>
              <span className="text-sm">Track your Order</span>
            </Link>
          </div>
          <div className="language">
            <select name="language" id="" className="text-[11px]">
              <option value="English">EN</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" bg-customBlue pb-5 md:pb-0">
        <div className="flex justify-between px-[7%] pt-7 pb-5 md:pb-7 items-center">
          <div className="flex gap-10 grow-[5] justify-between">
            <img src={logo} alt="" />
            <div className="flex max-[768px]:hidden grow max-w-[1000px] text-sm relative">
              <input
                type="text"
                className=" rounded-3xl p-2 w-full pr-[85px]"
                placeholder="Search anything"
              />
              <button
                type="button"
                className=" bg-tertiary text-white rounded-3xl px-5 absolute h-full right-0 text-center"
              >
                Search
              </button>
            </div>
          </div>
          <div className="flex gap-8 sm:gap-5 grow-[1] justify-end text-white">
            <div className="flex gap-2 hover:text-tertiary">
              {Profile == undefined ? (
                <Link to="/login" className="flex gap-2">
                  <i className="material-symbols-rounded cursor-pointer">
                    person
                  </i>
                  <span className="text-sm mt-1 max-[640px]:hidden">
                    Sign in
                  </span>
                </Link>
              ) : (
                User_Profile
              )}
            </div>
            <div className="flex gap-2 hover:text-tertiary">
              <Link to="/cart" className="flex gap-2">
                <i className="material-symbols-rounded cursor-pointer">
                  shopping_cart
                </i>
                <span className="text-sm mt-1 max-[640px]:hidden">Cart</span>
              </Link>
            </div>
            <div
              className="flex gap-2 items-center hover:text-tertiary cursor-pointer md:hidden"
              onClick={handleMenu}
            >
              <RiMenuFill className="scale-[150%]"/>
              <span className="text-sm max-[640px]:hidden">Menu</span>
            </div>
          </div>
        </div>
        <div className="flex md:hidden mx-[7%] text-sm relative">
          <input
            type="text"
            className=" rounded-3xl p-2 w-full pr-[85px]"
            placeholder="Search anything"
          />
          <button
            type="button"
            className=" bg-tertiary text-white rounded-3xl px-5 absolute h-full right-0 text-center"
          >
            Search
          </button>
        </div>
      </div>
      <div className="pl-56 flex items-center gap-20 bg-gray-100 max-[768px]:hidden">
        <div>
          <select
            id="dropdown"
            className="bg-tertiary p-5 text-white border border-tertiary text-sm"
          >
            <option value="">Browse categories</option>
            <option value="Telephone">Telephone</option>
            <option value="Computer">Computer</option>
            <option value="Tv Screens">Tv Screens</option>
          </select>
        </div>
        <ul className="flex items-center space-x-6 py-5 text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about_us">About us</Link>
          </li>
        </ul>
      </div>
      <div
        className={`sideMenu ${
          isOpen ? 'translate-x-0' : '-translate-x-96'
        } transition-transform ease-in-out duration-500 fixed top-0 h-screen z-10 w-96`}
      >
        <div className="flex flex-col gap-10 bg-customBlue h-full pt-10 pl-10 pr-5">
          <div className="cursor-pointer flex items-center justify-between">
            <img src={logo} alt="" />
            <div
              className="flex items-center gap-3 cursor-pointer text-white hover:text-tertiary"
              onClick={handleMenu}
            >
              <IoClose className=" scale-[200%]" />
              <p>Close</p>
            </div>
          </div>
          <ul className=" text-white font-Poppins flex gap-5 flex-col">
            <li>
              <Link to={'/'} className=" hover:text-tertiary">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/'} className=" hover:text-tertiary">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
