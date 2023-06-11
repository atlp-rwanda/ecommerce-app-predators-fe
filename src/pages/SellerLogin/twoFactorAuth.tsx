import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import AvatarAut from '../../assets/images/AvatarAuth.png';
import { otpVerifyUser } from '../../redux/action/otpAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TwoFactorAuth: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, any> = useDispatch(); // Use ThunkDispatch type
  const [otp, setOtp] = useState('');
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');

  const optHandle = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOtp(e.target.value);
  };
  const optHandle1 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOtp1(e.target.value);
  };
  const optHandle2 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOtp2(e.target.value);
  };
  const optHandle3 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOtp3(e.target.value);
  };
  const optHandle4 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOtp4(e.target.value);
  };
  const optHandle5 = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOtp5(e.target.value);
  };

  const OtpDigit = otp + otp1 + otp2 + otp3 + otp4 + otp5;
  const data = { token: OtpDigit };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (otp.trim() === '') {
      toast.error('Please enter your digits correctly.');

      return;
    }
    dispatch(otpVerifyUser(data));
    console.log(OtpDigit);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="bg-white sm:col-span-1 flex items-center justify-center">
        <form className="flex flex-col items-center my-3 shadow-md mt-10 sm:mt-32 px-7 py-10 rounded-md w-full sm:max-w-md mx-4 border border-gray-200">
          <ToastContainer position="top-right" autoClose={5000} />
          <label className="font-semibold text-2xl mb-3">
            Two-factor Authentication
          </label>
          <label className="text-xs text-primary font-sans mb-5 mt-4">
            Enter the codes in the form below to verify your identity
          </label>
          <div className="grid grid-cols-6 justify-center space-x-2">
            <input
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp}
              onChange={optHandle}
            />
            <input
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp1}
              onChange={optHandle1}
            />
            <input
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp2}
              onChange={optHandle2}
            />
            <input
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp3}
              onChange={optHandle3}
            />
            <input
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp4}
              onChange={optHandle4}
            />
            <input
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp5}
              onChange={optHandle5}
            />
          </div>
          <button
            className="bg-tertiary font-semibold text-xs font-Poppins text-white px-10 py-4 rounded-md w-full mb-4 hover:bg-yellow-600 duration-500"
            onClick={onSubmit}
          >
            Verify
          </button>
          <Link
            to="/"
            className="text-tertiary hover:text-primary duration-500"
          >
            Don't receive code
          </Link>
        </form>
      </div>
      <div className="bg-primary h-screen sm:col-span-1 items-center justify-center hidden sm:block">
        <img
          src={AvatarAut}
          alt=""
          className="w-64 sm:w-96 mt-10 sm:mt-52 mx-auto"
        />
      </div>
    </div>
  );
};

export default TwoFactorAuth;
