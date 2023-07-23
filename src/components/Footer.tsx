import logo from '../assets/logo.svg';
import { AiOutlineSend } from 'react-icons/ai';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import headphone from '../assets/headphone.svg';

function Footer() {
  return (
    <div className="bg-blue-200 pt-5">
      <div className="flex flex-wrap bg-white py-4 px-20 mx-6 rounded-lg justify-center xl:justify-between gap-x-10">
        <h4 className="text-2xl whitespace-nowrap font-bold text-customBlue mt-4">
          Subscribe Newsletter
        </h4>
        <div className="relative flex mt-3 max-[780px]:w-[250px]">
          <input
            className="bg-[#EDA415] text-sm rounded-lg text-white px-4 py-2 w-80 h-10 placeholder-white"
            type="email"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-4 px-3 text-white mt-2"
          >
            <AiOutlineSend />
          </button>
        </div>
        <div className="flex whitespace-nowrap py-4 px-8 mx-6 rounded-lg xs:w-max gap-x-4 items-center mt-1">
          <img src={headphone} alt="" className="h-6" />
          <h6>
            Call Us: <span>(+25) 0785 7676 47</span>
          </h6>
        </div>
      </div>
      <footer className="flex flex-wrap justify-between py-2 px-20 my-4">
        <div className="col flex flex-col items-start mb-5">
          <img src={logo} alt="" />
          <h6 className="text-base pb-2">1 KN 78 ST</h6>
          <p className="text-sm mb-2">Kigali, Rwanda</p>
          <div className="follow">
            <h4 className="text-2xl font-bold text-customBlue">Follow Us</h4>
            <hr className="border-t-1 border-gray-500 mt-2" />
            <div className="flex gap-5 mt-2 text-gray-500 cursor-pointer">
              <FaGoogle />
              <FaFacebook />
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>
        <div className="col flex flex-col items-start mb-5">
          <h4 className="text-2xl font-bold text-customBlue">Get Help</h4>
          <a href="#" className="text-sm no-underline text-gray-700 mb-1">
            About us
          </a>
          <a href="#" className="text-sm no-underline text-gray-700 mb-1">
            Contact us
          </a>
          <a href="#" className="text-sm no-underline text-gray-700 mb-1">
            Return Policy
          </a>
          <a href="#" className="text-sm no-underline text-gray-700 mb-1">
            Privacy Policy
          </a>
          <a href="#" className="text-sm no-underline text-gray-700 mb-1">
            Payment Policy
          </a>
        </div>
        <div className="col flex flex-col items-start mb-5">
          <h4 className="text-2xl font-bold text-customBlue">About Us</h4>
          <a href="#">About us</a>
          <a href="#">News</a>
          <a href="#">Service</a>
          <a href="#">Customer Care</a>
          <a href="#">FAQ's</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
