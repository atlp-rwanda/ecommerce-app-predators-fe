/* eslint-disable */

import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo 3.png';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiTruck } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { BiCartAlt } from 'react-icons/bi';
import SearchBar from '../../components/search/SearchBar';

interface NavHeaderProps {
  onSearchText: (text: string) => void;
}

function NavHeader({ onSearchText }: NavHeaderProps) {
  return (
    <div className="w-full fixed">
      <div className="bg-white ">
        <div className="flex justify-between mx-5">
          <div>
            <label>Need help? call us: (+25) 0785 7676 47</label>
          </div>
          <div className="flex space-x-2">
            <HiOutlineLocationMarker size={30} />
            <label>Our store</label>
            <FiTruck size={30} />
            <label>Track your order</label>
          </div>
        </div>
      </div>
      <div className="bg-primary py-4 text-white flex ">
        <div className="flex w-full mx-20">
          <div className="flex mr-14 pt-2">
            <img src={logo} alt="" className="w-8 ml-10 h-fit " />
            <label className="uppercase Poppins font-bold pt-1">predator</label>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex relative">
              <SearchBar onSearchText={onSearchText} />
            </div>
            <div className="space-x-4 pt-2 flex">
              <BiUser size={25} />
              <label>Sign in</label>
              <BiCartAlt size={25} />
              <label className="w-fit h-fit px-1 rounded-full bg-tertiary">
                0
              </label>
              <label>Cart</label>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 ">
        <div className="mx-56 flex space-x-20">
          <select
            id="dropdown"
            className="bg-tertiary p-3 text-white outline-none"
          >
            <option value="">Browse categories</option>
            <option value="Telephone">Telephone</option>
            <option value="Computer">Computer</option>
            <option value="Tv Screens">Tv Screens</option>
          </select>
          <nav>
            <ul className="flex space-x-6 mt-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <NavLink to="/about us">About us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="bg-green-50 w-full space-x-5 ml-16">
          <label>Home</label>
          <label>All category</label>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
