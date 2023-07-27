import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import AvatarAut from '../../assets/images/AvatarAuth.png';
import { otpVerifyUser } from '../../redux/action/otpAction';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TwoFactorAuth: React.FC = () => {
  const dispatch: ThunkDispatch<unknown, unknown, never> = useDispatch(); // Use ThunkDispatch type
  const [otp, setOtp] = useState('');
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [otp5, setOtp5] = useState('');
  const [isLoading, setLoading] = useState(false);

  // Create refs for each input element
  const otpRef = useRef<HTMLInputElement>(null);
  const otp1Ref = useRef<HTMLInputElement>(null);
  const otp2Ref = useRef<HTMLInputElement>(null);
  const otp3Ref = useRef<HTMLInputElement>(null);
  const otp4Ref = useRef<HTMLInputElement>(null);
  const otp5Ref = useRef<HTMLInputElement>(null);
  // Create an array of refs
  const refs = [otpRef, otp1Ref, otp2Ref, otp3Ref, otp4Ref, otp5Ref];
  const optHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    if (e.target.value.length === 1) {
      otp1Ref.current?.focus(); // Focus on otp1 input element
    }
  };

  const optHandle1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp1(e.target.value);
    if (e.target.value === '') {
      otpRef.current?.focus(); // Focus on otp input element
    } else if (e.target.value.length === 1) {
      otp2Ref.current?.focus(); // Focus on otp2 input element
    }
  };

  const optHandle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp2(e.target.value);
    if (e.target.value === '') {
      otp1Ref.current?.focus(); // Focus on otp1 input element
    } else if (e.target.value.length === 1) {
      otp3Ref.current?.focus(); // Focus on otp3 input element
    }
  };

  const optHandle3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp3(e.target.value);
    if (e.target.value === '') {
      otp2Ref.current?.focus(); // Focus on otp2 input element
    } else if (e.target.value.length === 1) {
      otp4Ref.current?.focus(); // Focus on otp4 input element
    }
  };

  const optHandle4 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp4(e.target.value);
    if (e.target.value === '') {
      otp3Ref.current?.focus(); // Focus on otp3 input element
    } else if (e.target.value.length === 1) {
      otp5Ref.current?.focus(); // Focus on otp5 input element
    }
  };

  const optHandle5 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp5(e.target.value);
    if (e.target.value === '') {
      otp4Ref.current?.focus(); // Focus on otp4 input element
    }
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && e.currentTarget.value === '') {
      if (index === 1) {
        otpRef.current?.focus(); // Focus on otp input element
      } else {
        const previousRef = refs[index - 1];
        previousRef.current?.focus(); // Focus on the previous input element
      }
    }
  };

  const OtpDigit = otp + otp1 + otp2 + otp3 + otp4 + otp5;
  const data = { token: OtpDigit };
  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    if (
      otp.trim() === '' ||
      otp1.trim() === '' ||
      otp2.trim() === '' ||
      otp3.trim() === '' ||
      otp4.trim() === '' ||
      otp5.trim() === ''
    ) {
      toast.error('Please fill all field.');

      return;
    }

    dispatch(otpVerifyUser(data)); //Dispatch the callback to the store and pass the data as a number to the callback. This number is then parsed into the store. The store
    setOtp('');
    setOtp1('');
    setOtp2('');
    setOtp3('');
    setOtp4('');
    setOtp5('');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="bg-white sm:col-span-1 flex items-center justify-center">
        <form className="flex flex-col items-center my-3 shadow-md mt-10 sm:mt-32 px-7 py-10 rounded-md w-full sm:max-w-md mx-4 border border-gray-200">
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
              onKeyDown={(e) => onKeyDown(e, 0)}
            />
            <input
              ref={otp1Ref}
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp1}
              onChange={optHandle1}
              onKeyDown={(e) => onKeyDown(e, 1)}
            />
            <input
              ref={otp2Ref}
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp2}
              onChange={optHandle2}
              onKeyDown={(e) => onKeyDown(e, 2)}
            />
            <input
              ref={otp3Ref}
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp3}
              onChange={optHandle3}
              onKeyDown={(e) => onKeyDown(e, 3)}
            />
            <input
              ref={otp4Ref}
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp4}
              onChange={optHandle4}
              onKeyDown={(e) => onKeyDown(e, 4)}
            />
            <input
              ref={otp5Ref}
              className="shadow-md w-12 sm:w-14 p-3 sm:p-4 mb-3 sm:mb-6 rounded-md outline-none outline-2 outline-gray-200"
              type="text"
              name="name"
              value={otp5}
              onChange={optHandle5}
              onKeyDown={(e) => onKeyDown(e, 5)}
            />
          </div>
          <button
            className={`bg-tertiary font-semibold text-xs font-Poppins text-white px-10 py-4 rounded-md w-full mb-4 hover:bg-yellow-600 duration-500 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={onSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify'}
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
