import React, { useState, ChangeEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo 3.png';
import { HiOutlineLocationMarker } from 'react-icons/hi'; // You can also import individual components if needed';
import { FiTruck } from 'react-icons/fi'; // You can also import individual components if needed';
import { BiUser } from 'react-icons/bi'; // You can also import individual components if needed';
import { BiCartAlt } from 'react-icons/bi'; // You can also import individual components if needed';
function NavHeader() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="bg-white ">
        <div className="flex justify-between mx-5 my-3">
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
      <div className="bg-primary py-4 text-white flex space-x-2">
        <div className="flex w-full mx-20">
          <div className="flex mr-14 pt-2">
            <img src={logo} alt="" className="w-8 ml-10 h-fit " />
            <label className="uppercase Poppins font-bold pt-1">predator</label>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex relative">
              <input
                type="text"
                placeholder="Search anything"
                className="py-3 px-6 rounded-full text-black outline-none w-96"
              />
              <button className="bg-tertiary px-8 rounded-full hover:bg-yellow-600 absolute right-0 py-3">
                Search
              </button>
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
            value={selectedOption}
            onChange={handleSelectChange}
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
      </div>
    </div>
  );
}

export default NavHeader;
