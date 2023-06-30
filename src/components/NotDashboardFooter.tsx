import logo from '../assets/images/logo 3.png';
import { AiOutlineSend } from 'react-icons/ai';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

function NotDashboardFooter() {
  return (
    <footer className="bg-[#E2F4FF]  h-screen flex flex-col   ">
      <div className="footer-section flex bg-white mt-40 py-5 px-8 mx-60 rounded-lg xs: w-max gap-x-20">
        <h2 className="font-bold text-sky-700 ">Subscribe to Our Newsletter</h2>
        <div className="subscribe-form flex bg-[#EDA415] rounded-full text-white ">
          <input
            className="bg-[#EDA415] text-xs rounded-full text-white"
            type="email"
            placeholder="Enter your email"
          />
          <button type="submit">
            <AiOutlineSend />
          </button>
        </div>
        <p className="grin">Call Us 24/7: (+250) 785 7676 47</p>
      </div>

      <div className="footer-content flex mt-10 gap-72 xs: gap-x-40 mx-40">
        <div className="ml-20 pt-2 ">
          <div className="flex">
            <img src={logo} alt="" className="w-5 ml-10 h-fit" />
            <label className="uppercase Poppins font-semibold">predator</label>
          </div>
          <div className="text-xs text-sky-800 ml-10 mt-3">
            <ul>
              <li>1 KN 78 St, Kigali</li>
              <li>Rwanda Country</li>
            </ul>
          </div>
          <hr className="border-t-1 border-gray-500 ml-10 mt-6" />
          <div className="flex gap-5 ml-10 mt-2 text-gray-500">
            <FaGoogle />
            <FaFacebook />
            <IoLogoWhatsapp />
          </div>
        </div>

        <div className="text-sky-800 text-xs flex-col">
          <h2 className="font-bold mt-1 py-2">Get Help</h2>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Payment Policy</li>
          </ul>
        </div>
        <div className="footer-section ml-10 text-sky-800 text-xs flex-col">
          <h2 className="font-bold mt-1 py-2">About Us</h2>
          <ul className="space-y-2">
            <li>News</li>
            <li>Services</li>
            <li>Our Policies</li>
            <li>Customer Care</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default NotDashboardFooter;
